<template>
  <div class="contact-detail">
    <div class="contact-detail__info">
      <div class="contact-detail__info-item">
        <div class="contact-detail__button-group">
          <button class="contact-detail__button">Edit</button>
          <button class="contact-detail__button">Delete</button>
        </div>
        <h2>{{ contact?.name }}</h2>
        <p>Email: {{ contact?.email }}</p>
        <p>Phone: {{ contact?.phone }}</p>
        <p>Status: {{ contact?.status }}</p>
        <p>Company: {{ contact?.company }}</p>
        <p>Job Title: {{ contact?.jobTitle }}</p>
        <p>Notes: {{ contact?.notes }}</p>
        <p>Updated at {{ contact?.updatedAt }}</p>
        <p>Created at {{ contact?.createdAt }}</p>
      </div>
      <div class="contact-detail__interactions">
        <h3>Interactions</h3>
        <p>2025-03-01</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>2025-04-11</p>
        <p>Lorem ipsum dolor sit amet consectetur. </p>
        <p>2025-05-08</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit. </p>
        <div class="interaction-add-btn-container">
          <button class="interaction-add-btn">
            <font-awesome-icon icon="fa-solid fa-plus" class="interaction-add-btn-icon" />  Interaction
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from '@/types/contact';

defineProps<{
  contact: Contact | null
}>()

</script>

<style scoped lang="scss">
.contact-detail {
  width: 50%;
  height: 100%;
  padding: 1.5rem 3rem;
  background-color: $primary-yellow;
  outline: 4px solid $outline-color;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .contact-detail__info {
    margin-bottom: 2rem;

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
      background-color: darken($primary-green, 5%);
      transform: translateY(0.2rem);
    }
  }

  .contact-detail__button:last-child {
    background-color: #e46565; 
    color: $primary-yellow;

    &:hover {
      background-color: darken(#e46565, 10%);
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


</style>
