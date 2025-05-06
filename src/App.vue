<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { ref } from 'vue'
import type { Contact } from './types/contact'
import { contactsData } from './data/contacts'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'

const isMobile = ref(window.innerWidth < 768)
const isDetailOpen = ref(false)
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

function handleAddContact(contact: Contact) {
  contacts.value.push(contact)
  isFormOpen.value = false
}

function openEditForm(contact: Contact) {
  editingContact.value = contact
  isFormOpen.value = true
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
      />
      <!-- Modal for the form -->
      <Modal v-if="isFormOpen" @close="isFormOpen = false">
        <ContactForm 
        :contact="editingContact"
        @submit="handleAddContact" />
      </Modal>
      <BaseFooter />
    </div>
  </div>
  <div class="modal-overlay" @click.self="$emit('close')">
  <div class="modal-content">
    <slot />
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
