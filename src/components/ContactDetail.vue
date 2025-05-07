<template>
  <div v-if="contact" class="contact-detail">
    <div class="contact-detail__info">
      <div class="contact-detail__info-item">
        <div class="contact-detail__button-group">
          <button 
          class="contact-detail__button"
          @click="$emit('edit', contact)"
          >Edit</button>
          <button 
          class="contact-detail__button"
          @click="$emit('delete', contact)">Delete</button>
        </div>
        <h2>{{ contact.name }}</h2>
        <p><span class="contact-detail__info-item-label">Email:</span> {{ contact.email }}</p>
        <p><span class="contact-detail__info-item-label">Phone:</span> {{ contact.phone }}</p>
        <p><span class="contact-detail__info-item-label">Status:</span> {{ contact.status }}</p>
        <p><span class="contact-detail__info-item-label">Company:</span> {{ contact.company }}</p>
        <p><span class="contact-detail__info-item-label">Job Title:</span> {{ contact.jobTitle }}</p>
        <p><span class="contact-detail__info-item-label">Notes:</span> {{ contact.notes }}</p>
        <p><span class="contact-detail__info-item-label">Updated at:</span> {{ contact.updatedAt.toLocaleDateString() }}</p>
        <p><span class="contact-detail__info-item-label">Created at:</span> {{ contact.createdAt.toLocaleDateString() }}</p>
      </div>
      <div class="contact-detail__interactions">
        <h3>Interactions</h3>
        <ul class="timeline">
          <li v-for="i in contact.interactions" :key="i.date.getTime()">
            <div class="timeline-dot" />
            <div class="timeline-content">
              <p class="timeline-date">{{ i.date.toLocaleDateString() }}</p>
              <p class="timeline-type">{{ i.type }}</p>
              <p class="timeline-note">{{ i.note }}</p>
            </div>
          </li>
        </ul>
        <div class="interaction-add-btn-container">
          <button 
          class="interaction-add-btn"
          @click="$emit('open-add-interaction', contact.id)"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="interaction-add-btn-icon" />  Interaction
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact, Interaction } from '@/types/contact';

defineProps<{ contact: Contact | null }>()

defineEmits<{
  (e: 'edit', contact: Contact): void
  (e: 'delete', contact: Contact): void
  (e: 'open-add-interaction', contactId: string): void
  (e: 'add-interaction', payload: { contactId: string; interaction: Interaction }): void
}>()

</script>

<style scoped lang="scss">
.contact-detail {

  width: 100%;
  height: 100%;
  background-color: $primary-yellow;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 768px) {
  width: 50%;
  height: 100%;
  padding: 1.5rem 3rem;
  background-color: $primary-yellow;
  outline: 4px solid $outline-color;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  }

  .contact-detail__info {
    margin-bottom: 2rem;

    .contact-detail__info-item-label {
      font-weight: bold;
      color: rgb(0, 0, 0);
      margin-right: 1rem;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      color: $primary-green;
    }

    p {
      font-size: 1rem;
      margin: 0.3rem 0;
      color: #333;
    }
  }

  .contact-detail__interactions {
    background: rgba(255, 255, 255, 0.6);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 1rem 0 0 -0.2rem;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: $primary-green;
    }

    p {
      font-size: 0.95rem;
      margin: 0.4rem 0;
      color: #444;
    }

    p:nth-child(odd) {
      font-weight: bold;
    }
  }

  // 自訂 scrollbar 美化
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $primary-green;
    border-radius: 9999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
}

//button group
.contact-detail__button-group {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;

  .contact-detail__button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .contact-detail__button:first-child {
    background-color: $primary-green;
    color: $primary-yellow;

    &:hover {
      transform: translateY(0.2rem);
    }
  }

  .contact-detail__button:last-child {
    background-color: #e46565; 
    color: $primary-yellow;

    &:hover {

      transform: translateY(0.2rem);
    }
  }
}

//create interaction button
.interaction-add-btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  .interaction-add-btn {
    padding: 0.4rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: $primary-green;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid $primary-green;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      background-color: $primary-green;
      color: $primary-yellow;
      transform: translateY(0.2rem);
    }
  }
}

//timeline
.timeline {
  position: relative;
  padding-left: 1.5rem;
  list-style: none;
  border-left: 3px solid $primary-green;

  li {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .timeline-dot {
    position: absolute;
    top: 2.3rem;
    left: -1.95rem;
    width: 12px;
    height: 12px;
    background-color: $primary-green;
    border-radius: 50%;
  }

  .timeline-content {
    background: #fff;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    font-size: 0.95rem;

    .timeline-date {
      font-size: 0.8rem;
      font-weight: bold;
      color: $primary-green;
    }

    .timeline-type {
      font-size: 0.9rem;
      margin: 0.3rem 0;
    }

    .timeline-note {
      color: #444;
    }
  }
}



</style>
