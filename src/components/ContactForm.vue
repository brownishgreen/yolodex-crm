<template>
  <div class="contact-form">
    <h2 style="text-align: center;" class="form-title">Create New Contact</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="formDataSubmit.name" type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="formDataSubmit.email" type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input v-model="formDataSubmit.phone" type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input v-model="formDataSubmit.company" type="text" id="company" name="company" required>
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input v-model="formDataSubmit.jobTitle" type="text" id="jobTitle" name="jobTitle" required>
      </div>
      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea v-model="formDataSubmit.notes" id="notes" name="notes" required></textarea>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="formDataSubmit.status" id="status" name="status" required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Contact } from '@/types/contact';

const props = defineProps<{
  contact?: Contact | null
}>()

const formDataSubmit = reactive<Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>>({
  name: props.contact?.name || '',
  email: props.contact?.email || '',
  phone: props.contact?.phone || '',
  company: props.contact?.company || '',
  jobTitle: props.contact?.jobTitle || '',
  notes: props.contact?.notes || '',
  status: props.contact?.status || 'active',
});



function handleSubmit() {
  const newContact = {
    ...(props.contact ?? {
      id: Date.now().toString(),
      createdAt: new Date()
    }),
    ...formDataSubmit,
    updatedAt: new Date()
  };

  //emit the new contact to the parent component
  emit('submit', newContact);
}

const emit = defineEmits<{
  (e: 'submit', contact: Contact): void
}>()

</script>

<style scoped lang="scss">
.contact-form {
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }

  .form-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: $primary-green;
    text-align: center;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    color: #333;
  }

  input,
  select,
  textarea {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid $primary-yellow;

    &:focus {
      outline: 2px solid $primary-green;
    }
  }
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
  background-color: $primary-green;
  color: $primary-yellow;
  border: none;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: translateY(1px);
  }
}
</style>
