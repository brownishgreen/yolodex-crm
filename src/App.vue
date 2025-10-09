<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import type { Contact, Interaction } from './types/contact'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'
import InteractionForm from './components/InteractionForm.vue'
import { storeToRefs } from 'pinia'
import { useContactStore } from './stores/contactStore'

const contactStore = useContactStore()
const { 
  contacts, selectedContact, isMobileView, isDetailModalOpen, 
  isFormModalOpen, editingContact, isInteractionFormModalOpen, addingContactId 
} = storeToRefs(contactStore)

const { 
  selectContact, openEditForm, handleContactSubmit, handleDeleteContact, 
  handleOpenAddInteraction, handleAddInteraction, handleResize 
} = contactStore


onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})


</script>

<template>
  <div class="container">
    <div class="card">
      <BaseHeader @create="isFormModalOpen = true" />
      <main class="body">
        <ContactPanel 
        :contacts="contacts"
        :selected="selectedContact"
        :is-mobile-view="isMobileView"
        :is-detail-modal-open="isDetailModalOpen"
        @edit="openEditForm"
        @delete="handleDeleteContact"
        @open-add-interaction="handleOpenAddInteraction"
        @select="selectContact"
        @close-detail="isDetailModalOpen = false"
        />
      </main>
      <!-- Modal for the create contactform -->
      <Modal v-if="isFormModalOpen" @close="isFormModalOpen = false">
        <ContactForm 
        :contact="editingContact"
        @submit="handleContactSubmit" />
      </Modal>
      <!-- Modal for the create interaction form -->
      <Modal v-if="isInteractionFormModalOpen" @close="isInteractionFormModalOpen = false">
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
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1617957772097-93dc166cd335?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .card {
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background: $primary-yellow;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

@media (max-width: 768px) {
  .container {
    width: 100;
    height: 100%;
    border-radius: 0;
    outline: none;
  }
}

</style>
