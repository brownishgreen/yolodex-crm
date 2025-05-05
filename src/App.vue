<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { ref } from 'vue'
import type { Contact } from './types/contact'
import { contactsData } from './data/contacts'

const isMobile = ref(window.innerWidth < 768)
const isDetailOpen = ref(false)
const selectedContact = ref<Contact | null>(null)
function selectContact(contact: Contact) {
  selectedContact.value = contact
  if (isMobile.value) {
    isDetailOpen.value = true
  }
}

</script>

<template>
  <div class="container">
    <div class="body-container">
      <BaseHeader />
      <ContactPanel />
      <BaseFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.container {
  .body-container {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  background-image: url('https://images.unsplash.com/photo-1664735245698-b05abf000d4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .body-content {
    width: 100%;
      height: 100%;
      background-color: $primary-yellow;
    }
  }
}
</style>
