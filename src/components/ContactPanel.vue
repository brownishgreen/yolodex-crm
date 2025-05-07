<template>
  <div class="contact-panel">
    <!-- <div class="floating-form">
      <InteractionForm />
    </div> -->
    <ContactList
      :contacts="contacts"
      :selected="selectedContact"
      @select="selectContact"
    />
    
    <!-- desktop mode: show detail directly -->
    <ContactDetail
      v-if="!isMobile"
      :contact="selectedContact"
      @edit="$emit('edit', selectedContact)"
      @delete="$emit('delete', selectedContact)"
      :key="selectedContact?.id"
      @open-add-interaction="$emit('open-add-interaction')"
    />
    <!-- mobile mode: show detail in Modal -->
    <Modal v-if="isMobile && isDetailOpen" @close="isDetailOpen = false">
      <ContactDetail 
      :contact="selectedContact"
      @edit="$emit('edit', selectedContact)"
      @delete="$emit('delete', selectedContact)"
      :key="selectedContact?.id"
      @open-add-interaction="$emit('open-add-interaction')"
      @add-interaction="interaction => $emit('add-interaction', interaction)"
      />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import ContactList from './ContactList.vue';
import ContactDetail from './ContactDetail.vue';
import Modal from './Modal.vue';
import { ref, onMounted, computed } from 'vue';
//get contacts data and type
import type { Contact } from '@/types/contact';
import { contactsData } from '@/data/contacts';

const props = defineProps<{
  contacts: Contact[]
}>();

const isMobile = ref(false);
const isDetailOpen = ref(false);
const selectedId = ref<string | null>(props.contacts[0]?.id || null)
const selectedContact = computed(() => 
  props.contacts.find(c => c.id === selectedId.value) || null
)


function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

function selectContact(contact: Contact) {
  selectedId.value = contact.id
  if (isMobile.value) {
    isDetailOpen.value = true
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

.floating-form {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>