<template>
  <div class="contact-list">
    <aside class="contact-list__aside">
      <div class="contact-list__search">
        <input type="text" placeholder="Search contact..." class="contact-list__search-input" v-model="searchQuery"/>
        <div class="sort-container">
          <label for="sort">Sort by:</label>
          <select id="sort" v-model="selectedSort">
            <option value="name">Name</option>
            <option value="status">Status</option>
            <option value="createdAt">Created Time</option>
          </select>
          <button @click="exportContactsToCSV" class="export-button">
            <font-awesome-icon :icon="['fas', 'file-csv']" size="xl"/>
          </button>
        </div>
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

const props = defineProps<{
  contacts: Contact[]
  selected: Contact | null
}>()

//define emit to emit the selected contact
defineEmits<{
  (e: 'select', contact: Contact): void
}>()

//create a ref for the search query
const searchQuery = ref('')
const selectedSort = ref<'name' | 'createdAt' | 'status'>('name')
const filteredContacts = computed(() =>
  props.contacts
  .filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
  .sort((a, b) => {
    if (selectedSort.value === 'name') {
      return a.name.localeCompare(b.name)
    } else if (selectedSort.value === 'createdAt') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else if (selectedSort.value === 'status') {
      return a.status === 'active' ? -1 : 1
    }
    return 0
  })
)

function exportContactsToCSV() {
  const headers = ['Name', 'Email', 'Phone', 'Status', 'Company', 'Job Title', 'Notes', 'Created At', 'Updated At']
  const rows = filteredContacts.value.map(contact => [
    contact.name,
    contact.email,
    contact.phone,
    contact.status,
    contact.company,
    contact.jobTitle,
    contact.notes,
    contact.createdAt.toISOString(),
    contact.updatedAt.toISOString()
  ])

  const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'contacts.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped lang="scss">

.contact-list__aside {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ccc;
  @media (min-width: 768px) {
      width: 50%;
    }
  .contact-list__search {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .contact-list__search-input {
      width: 40%;
      max-width: 40%;
      padding: 0.6rem 1rem;
      border-radius: 1rem;
      box-shadow: 0 0 10px 0 rgba(47, 46, 46, 0.15);
      border: 3px solid $primary-yellow;
    }

    .contact-list__search-input:focus {
      outline: 1px solid $primary-green;
    }

    .sort-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 1rem;
      color: $primary-green;
      

      label {
        font-weight: bold;
        font-size: 0.9rem;
      }
      
      select {
        padding: 0.6rem 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px 0 rgba(47, 46, 46, 0.15);
        border: 3px solid $primary-yellow;

      }
    }

    .export-button {
      background-color: $primary-green;
      color: $primary-yellow;
      border: 3px solid #ded6bd;
      padding: 0.6rem 1rem;
      margin-left: 1rem;
      border-radius: 1rem;
      font-size: 1.1rem;
      box-shadow: 0 0 10px 0 rgba(47, 46, 46, 0.15);
      cursor: pointer;
      transition: background-color 0.6s ease, transform 0.6s ease;

      svg {
        box-shadow: 0 0 10px 0 rgba(47, 46, 46, 0.15);
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }
  }
  .contact-list__items {
    max-height: calc(100vh - 150px);
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    padding: 0 3rem;
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