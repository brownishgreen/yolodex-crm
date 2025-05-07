<template>
  <form class="interaction-form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="type">Interaction Type</label>
      <select v-model="form.type" id="type" required>
        <option value="📞 Call">📞 Call</option>
        <option value="📧 Email">📧 Email</option>
        <option value="📅 Meeting">📅 Meeting</option>
        <option value="📝 Note">📝 Note</option>
        <option value="🍱 Lunch">🍱 Lunch</option>
      </select>
    </div>

    <div class="form-group">
      <label for="note">Note</label>
      <textarea v-model="form.note" id="note" required></textarea>
    </div>

    <div class="form-group">
      <label for="date">Date</label>
      <input v-model="form.date" type="date" id="date" required>
    </div>

    <button type="submit" class="submit-btn">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Interaction } from '@/types/contact'

// 父層會傳入這個 contact 對象
const props = defineProps<{
  contactId: string
}>()

// 這裡 emit 的 payload 是 { contactId, interaction }
const emit = defineEmits<{
  (e: 'add', payload: { contactId: string; interaction: Interaction }): void
}>()

const form = reactive({
  type: '📞 Call',
  note: '',
  date: new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
})

function handleSubmit() {
  const interaction: Interaction = {
    type: form.type as '📞 Call' | '📧 Email' | '📅 Meeting' | '📝 Note' | '🍱 Lunch',
    note: form.note,
    date: new Date(form.date)
  }

  emit('add', { contactId: props.contactId, interaction })

  // reset form
  form.type = '📞 Call'
  form.note = ''
  form.date = new Date().toISOString().slice(0, 10)
}
</script>

<style scoped lang="scss">
.interaction-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  .form-group {
    display: flex;
    flex-direction: column;
    width: 80%;

    label {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }

    select,
    textarea,
    input[type="date"] {
      padding: 0.5rem;
      border-radius: 6px;
      border: 2px solid $primary-yellow;
      font-size: 1rem;

      &:focus {
        outline: 2px solid $primary-green;
      }
    }

    textarea {
      min-height: 80px;
      resize: vertical;
    }
  }

  .submit-btn {
    align-self: flex-end;
    padding: 0.5rem 1rem;
    background-color: $primary-green;
    color: $primary-yellow;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      transform: translateY(1px);
    }
  }
}
</style>
