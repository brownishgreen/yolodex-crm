import { defineStore } from "pinia"
import { ref } from "vue"
import type { Contact, Interaction } from "@/types/contact"
import { contactsData } from "@/data/contacts"

export const useContactStore = defineStore('contact', () => {
  //Contact state
  const contacts = ref<Contact[]>(contactsData.map(contact => ({
    ...contact,
    interactions: [...contact.interactions].sort((a, b) => b.date.getTime() - a.date.getTime())
  })))
  const selectedContact = ref<Contact | null>(null)

  //Layout state
  const isMobileView = ref(window.innerWidth < 768)
  const isDetailModalOpen = ref(false)

  //Form state
  const isFormModalOpen = ref(false)
  const editingContact = ref<Contact | null>(null)
  const isInteractionFormModalOpen = ref(false)

  //Interaction state
  const addingContactId = ref<string>('')



  function selectContact(contact: Contact) {
    selectedContact.value = contact
    if (isMobileView.value) {
      isDetailModalOpen.value = true
    }
  }

  function openEditForm(contact: Contact) {
    editingContact.value = contact
    isFormModalOpen.value = true
  }

  function handleContactSubmit(contact: Contact) {
    const index = contacts.value.findIndex(contactItem => contactItem.id === contact.id)
    if (index !== -1) {
      //update the contact
      contacts.value.splice(index, 1, contact)
      selectedContact.value = { ...contact }
    } else {
      //add the new contact
      contacts.value.push(contact)
      selectedContact.value = contact
    }

    isFormModalOpen.value = false
    editingContact.value = null
  }

  function handleDeleteContact(contact: Contact) {
    contacts.value = contacts.value.filter(contactItem => contactItem.id !== contact.id)

    if (selectedContact.value?.id === contact.id) {
      selectedContact.value = null
      isDetailModalOpen.value = false
    }
  }

  function handleOpenAddInteraction(id: string) {
    if (!id) return
    addingContactId.value = id            // store the id of the contact to add interaction to
    isInteractionFormModalOpen.value = true
  }

  function handleAddInteraction({ contactId, interaction }: {
    contactId: string
    interaction: Interaction
  }) {
    const contactIndex = contacts.value.findIndex(contactItem => contactItem.id === contactId)

    if (contactIndex === -1) {
      isInteractionFormModalOpen.value = false
      console.error('contact not found, please add contact first')
      return
    }

    const old = contacts.value[contactIndex]

    // 1. Create a new contact object
    const updated: Contact = {
      ...old,
      interactions: [
        ...(old.interactions ?? []),
        interaction
      ].sort((a, b) => b.date.getTime() - a.date.getTime()), // new -> old
      updatedAt: new Date()
    }

    // 2. Use splice to swap the contact
    contacts.value.splice(contactIndex, 1, updated)

    // 3. Synchronize the selected contact in case of the contact is selected
    if (selectedContact.value?.id === contactId) {
      selectedContact.value = updated
    }

    // 4. Close the interaction form
    isInteractionFormModalOpen.value = false
  }

  function handleResize() {
    isMobileView.value = window.innerWidth < 768
  }

  return {
    contacts,
    selectedContact,
    isMobileView,
    isDetailModalOpen,
    isFormModalOpen,
    editingContact,
    isInteractionFormModalOpen,
    addingContactId,
    selectContact,
    openEditForm,
    handleContactSubmit,
    handleDeleteContact,
    handleOpenAddInteraction,
    handleAddInteraction,
    handleResize
  }

})


