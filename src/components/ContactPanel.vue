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
  selected: Contact | null
  isMobileView: boolean
  isDetailModalOpen: boolean
}>();

const emit = defineEmits<{
  (e: 'select', contact: Contact): void
  (e: 'edit', contact: Contact): void
  (e: 'delete', contact: Contact): void
  (e: 'open-add-interaction', id: string): void
  (e: 'close-detail'): void
}>()

</script>

<template>
  <div class="contact-panel">
    <ContactList
      :contacts="contacts"
      :selected="props.selected"
      @select="contact => emit('select', contact)"
    />
    
    <!-- desktop mode: show detail directly -->
    <ContactDetail
      v-if="!props.isMobileView && props.selected"
      :contact="props.selected"
      @edit="contact => emit('edit', contact)"
      @delete="contact => emit('delete', contact)"
      :key="props.selected?.id"
      @open-add-interaction="id => emit('open-add-interaction', id)"
    />
    <!-- mobile mode: show detail in Modal -->
    <Modal v-if="props.isMobileView && props.isDetailModalOpen" @close="$emit('close-detail')">
      <ContactDetail 
      :contact="props.selected"
      @edit="contact => emit('edit', contact)"
      @delete="contact => emit('delete', contact)"
      :key="props.selected?.id"
      @open-add-interaction="id => emit('open-add-interaction', id)"
      />
    </Modal>
  </div>
</template>



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

  @media (max-width: 768px) {
    height: 450px;
  }
}

@media (max-width: 768px) {
    .contact-panel {
      flex-direction: column;
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