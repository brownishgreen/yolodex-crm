<template>
  <div class="contact-list">
    <aside class="contact-list__aside">
      <div class="contact-list__search">
        <font-awesome-icon icon="fa-solid fa-search" class="search-icon" />
        <input type="text" placeholder="        Search contact..." class="contact-list__search-input" v-model="searchQuery"/>
      </div>
      <div class="contact-list__items">
        <ul class="contact-items">
          <li
          v-for="contact in filteredContacts"
          :key="contact.id"
          :class="['contact-item', contact === selected && 'selected']"
          @click="$emit('select', contact)"
          >
          {{ contact.name }}
          <span
          class="contact-item__status"
          :class="contact.status.toLowerCase()"
          >
          {{ contact.status }}
          </span>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Contact } from '@/types/contact';
import { contactsData } from '@/data/contacts';

//define this component will receive contacts and selected contact(2 props)
defineProps<{
  contacts: Contact[]
  selected: Contact | null
}>()

//define emit to emit the selected contact
defineEmits<{
  (e: 'select', contact: Contact): void
}>()

//create a ref for the search query
const searchQuery = ref('')
const filteredContacts = computed(() =>
  contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)


</script>

<style scoped lang="scss">

.contact-list__aside {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-list {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ccc;
  .contact-list__search {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .search-icon {
    position: absolute;
    top: 50%;
    left: 3.5rem;
    transform: translateY(-50%);
    color: $outline-color;
    font-size: 1rem;
  }

    .contact-list__search-input {
      width: 100%;
      max-width: 90%;
      padding: 0.6rem 1rem;
      font-size: 1rem;
      border-radius: 1rem;
      box-shadow: 0 0 10px 0 rgba(47, 46, 46, 0.15);
      border: 3px solid $primary-yellow;
    }

    .contact-list__search-input:focus {
      outline: 1px solid $primary-green;
    }
  }

  .contact-list__items {
    max-height: calc(100vh - 150px);
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    padding: 0 1.5rem;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

    .contact-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: $primary-green;
      cursor: pointer;
      transition: transform 0.5s ease, box-shadow 0.5s ease;

      &:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transform: scale(1.05); 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

      &.selected {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .contact-item__status {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.3rem 0.75rem;
        border-radius: 9999px;
        background-color: #ddd;
        text-transform: uppercase;

        &.active {
          background-color: #cce5cc;
          color: #2e7d32;
        }

        &.inactive {
          background-color: #eee;
          color: #999;
        }
      }
    }
    }
  }
}

//scrollbar style
.contact-list__items::-webkit-scrollbar {
  width: 6px;
}

.contact-list__items::-webkit-scrollbar-thumb {
  background-color: $primary-green;
  border-radius: 9999px;
}

.contact-list__items::-webkit-scrollbar-track {
  background: transparent;
}


</style>