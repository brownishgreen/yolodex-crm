<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { ref, nextTick } from 'vue'
import type { Contact } from './types/contact'
import { contactsData } from './data/contacts'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'

const isMobile = ref(window.innerWidth < 768)
const isDetailOpen = ref(false)
const selectedId = ref<string | null>(null)
const selectedContact = ref<Contact | null>(null)
const isFormOpen = ref(false)
const contacts = ref<Contact[]>(contactsData)

const editingContact = ref<Contact | null>(null)
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

</script>

<template>
  <div class="container">
    <div class="body-container">
      <BaseHeader @create="isFormOpen = true" />
      <ContactPanel 
      :contacts="contacts"
      :selected="selectedContact"
      @edit="openEditForm"
      @delete="handleDeleteContact"
      />
      <!-- Modal for the form -->
      <Modal v-if="isFormOpen" @close="isFormOpen = false">
        <ContactForm 
        :contact="editingContact"
        @submit="handleContactSubmit" />
      </Modal>
      <BaseFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.container {
  width: 100vw;
  height: 100vh;
  padding:1rem;
  background-image: url('https://images.unsplash.com/photo-1664735245698-b05abf000d4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  .body-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
