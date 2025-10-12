import { beforeEach, describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useContactStore } from '../src/stores/contactStore'

beforeEach(() => {
  // use createPinia() to create a new pinia instance, to avoid conflicts with other tests
  setActivePinia(createPinia())
})

describe('contactStore', () => {
  it('handles adding and removing a contact via handleContactSubmit / handleDeleteContact', () => {
    const store = useContactStore()

    // Use a unique id to avoid clashing with existing contactsData
    const testContact = { id: 'test-id-123', name: 'Yuan', interactions: [] }

    // Ensure the contact does not already exist
    expect(store.contacts.some(c => c.id === testContact.id)).toBe(false)

    // Act: add using the store's API
    store.handleContactSubmit(testContact)

    // Assert: the contact now exists
    expect(store.contacts.some(c => c.id === testContact.id)).toBe(true)

    // Also assert selectedContact was set to the added contact (store logic sets it)
    // Note: depending on your handleContactSubmit implementation, selectedContact may be set
    // to the same object or a shallow copy — we assert by id to be robust
    expect(store.selectedContact?.id).toBe(testContact.id)

    // Act: remove the contact using the store API
    store.handleDeleteContact(testContact)

    // Assert: contact no longer present
    expect(store.contacts.some(c => c.id === testContact.id)).toBe(false)

    // If it was selected, it should have been cleared (store sets selectedContact = null)
    if (store.selectedContact) {
      // if selection logic differs, it's safe to assert it is not the deleted id
      expect(store.selectedContact?.id).not.toBe(testContact.id)
    }
  })
})
