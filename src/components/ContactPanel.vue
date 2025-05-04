<template>
  <div class="contact-panel">
    <ContactList/>
    <ContactDetail />
  </div>
</template>

<script setup lang="ts">
import ContactList from './ContactList.vue';
import ContactDetail from './ContactDetail.vue';
import { ref } from 'vue';
//get contacts data and type
import type { Contact } from '@/types/contact';
import { contactsData } from '@/data/contacts';

const contacts = ref<Contact[]>(contactsData);

</script>

<style scoped lang="scss">
.contact-panel {
  width: 80vw;
  height: 650px;
  background-color: $primary-yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  outline: 4px solid $outline-color;
}
</style>