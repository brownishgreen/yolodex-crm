<template>
  <div class="contact-panel">
    <ContactList
      :contacts="contacts"
      :selected="selectedContact"
      @select="selectContact"
    />

    <!-- desktop mode: show detail directly -->
    <ContactDetail
      v-if="!isMobile"
      :contact="selectedContact"
    />
    <!-- mobile mode: show detail in Modal -->
    <Modal v-if="isMobile && isDetailOpen" @close="isDetailOpen = false">
      <ContactDetail :contact="selectedContact" />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import ContactList from './ContactList.vue';
import ContactDetail from './ContactDetail.vue';
import Modal from './Modal.vue';
import { ref, onMounted } from 'vue';
//get contacts data and type
import type { Contact } from '@/types/contact';
import { contactsData } from '@/data/contacts';

const isMobile = ref(false);
const isDetailOpen = ref(false);
const contacts = ref<Contact[]>(contactsData);
const selectedContact = ref<Contact | null>(contacts.value[0] || null);

function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

function selectContact(contact: Contact) {
  selectedContact.value = contact;
  if (isMobile.value) {
    isDetailOpen.value = true;
  }
}


</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.contact-panel {
  width: 80vw;
  height: 650px;
  background-color: $primary-yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  outline: 4px solid $outline-color;
}

@media (max-width: 768px) {
    .contact-panel {
      flex-direction: column;
      height: 100vh;
    }
}
</style>