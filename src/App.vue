<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import type { Contact, Interaction } from './types/contact'
import { contactsData } from './data/contacts'
import ContactForm from './components/ContactForm.vue'
import Modal from './components/Modal.vue'
import InteractionForm from './components/InteractionForm.vue'

//Layout state
const isMobileView = ref(window.innerWidth < 768)
const isDetailModalOpen = ref(false)

//Contact state
const selectedContact = ref<Contact | null>(null)
const contacts = ref<Contact[]>(contactsData.map(c => ({
  ...c,
  interactions: [...c.interactions].sort((a, b)=> b.date.getTime() - a.date.getTime())
})))

//Form state
const isFormModalOpen = ref(false)
const editingContact = ref<Contact | null>(null)
const addingContactId = ref<string>('')
const isInteractionFormModalOpen = ref(false)


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
  addingContactId.value = id            // 存起來
  isInteractionFormModalOpen.value = true
}

function handleAddInteraction({ contactId, interaction }: {
  contactId: string
  interaction: Interaction
}) {
  console.log('[add] contactId =', contactId)
  console.log('[add] contact ids =', contacts.value.map(contactItem => contactItem.id))


  const idx = contacts.value.findIndex(contactItem => contactItem.id === contactId)
  console.log('[add] idx =', idx)

  if (idx === -1) {
    isInteractionFormModalOpen.value = false
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
  isInteractionFormModalOpen.value = false
}

function handleResize() {
  isMobileView.value = window.innerWidth < 768
}

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
  background-image: url('https://images.unsplash.com/photo-1743444374283-06501bf51c11?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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
