<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { ref, nextTick } from 'vue'
import type { Contact, Interaction } from './types/contact'
import { contactsData } from './data/contacts'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'
import InteractionForm from './components/InteractionForm.vue'

const isMobile = ref(window.innerWidth < 768)
const isDetailOpen = ref(false)
const selectedId = ref<string | null>(null)
const selectedContact = ref<Contact | null>(null)
const isFormOpen = ref(false)
const contacts = ref<Contact[]>(contactsData)
const editingContact = ref<Contact | null>(null)
const isInteractionFormOpen = ref(false)
const addingContactId = ref<string>('')

function selectContact(contact: Contact) {
  selectedContact.value = contact
  if (isMobile.value) {
    isDetailOpen.value = true
  }
}

function handleContactSubmit(contact: Contact) {
  const index = contacts.value.findIndex(c => c.id === contact.id)
  if (index !== -1) {
    //update the contact
    contacts.value.splice(index, 1, contact)
    selectedContact.value = { ...contact }
  } else {
    //add the new contact
    contacts.value.push(contact)
    selectedContact.value = contact
  }

  isFormOpen.value = false
  editingContact.value = null
}

function openEditForm(contact: Contact) {
  editingContact.value = contact
  isFormOpen.value = true
}

function handleDeleteContact(contact: Contact) {
  contacts.value = contacts.value.filter(client => client.id !== contact.id)

  if (selectedId.value === contact.id) {
    selectedId.value = null
    isDetailOpen.value = false
  }
}

function handleAddInteraction({ contactId, interaction }: {
  contactId: string
  interaction: Interaction
}) {
  console.log('[add] contactId =', contactId)
  console.log('[add] contact ids =', contacts.value.map(c => c.id))


  const idx = contacts.value.findIndex(c => c.id === contactId)
  console.log('[add] idx =', idx)

  if (idx === -1) {
    isInteractionFormOpen.value = false
    console.log('contact not found,about add contact')
    return
  }

  const old = contacts.value[idx]

  // 1. 產生全新的 contact 物件
  const updated: Contact = {
    ...old,
    interactions: [
      ...(old.interactions ?? []),
      interaction
    ].sort((a, b) => b.date.getTime() - a.date.getTime()), // 新→舊
    updatedAt: new Date()
  }

  // 2. 用 splice 把新物件塞回去
  contacts.value.splice(idx, 1, updated)

  // 3. 同步選取中的 contact（保證引用一致）
  if (selectedContact.value?.id === contactId) {
    selectedContact.value = updated
  }

  // 4. 關掉表單
  isInteractionFormOpen.value = false
}

function handleOpenAddInteraction(id: string) {
  if (!id) return
  addingContactId.value = id            // 存起來
  isInteractionFormOpen.value = true
}

</script>

<template>
  <div class="container">
    <div class="card">
      <BaseHeader @create="isFormOpen = true" />
      <main class="body">
        <ContactPanel 
        :contacts="contacts"
        :selected="selectedContact"
        @edit="openEditForm"
        @delete="handleDeleteContact"
        @open-add-interaction="handleOpenAddInteraction"
        />
      </main>
      <!-- Modal for the create contactform -->
      <Modal v-if="isFormOpen" @close="isFormOpen = false">
        <ContactForm 
        :contact="editingContact"
        @submit="handleContactSubmit" />
      </Modal>
      <!-- Modal for the create interaction form -->
      <Modal v-if="isInteractionFormOpen" @close="isInteractionFormOpen = false">
        <InteractionForm
        :contact-id="addingContactId"
        @add="handleAddInteraction"
        />
      </Modal>
      <BaseFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1745069357747-5ed05c35b1ab?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  .card {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background: $primary-yellow;
    overflow: hidden;


  }
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    height: 100%;
    border-radius: 0;
    outline: none;
  }
}

</style>
