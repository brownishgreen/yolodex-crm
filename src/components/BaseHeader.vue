<template>
  <header>
    <div class="flex justify-between items-center">
      <img src="/src/assets/image/yolodex-logo.png" alt="Yolodex Logo"/>
      <div class="flex justify-between items-center">
        <button @click="$emit('create')" class="create-contact-btn"> + New</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'create'): void
}>()
</script>
<style scoped lang="scss">
@use '@/styles/variables' as *;
header {
  background-color: $primary-green;
  padding: 1rem;
  width: 80vw;
  border-radius: 25px 25px 0 0;
  outline: 4px solid $outline-color;
  img {
    width: 150px;

  }
  .nav-item {
    color: $primary-yellow;
    margin-right: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
  }
  .create-contact-btn {
  background-color: $primary-yellow;
  color: $primary-green;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: 0 0 25px 0 rgba(31, 30, 30, 0.32);
  cursor: pointer;
  transition: all 0.2s ease; // smooth hover + click 效果
}

.create-contact-btn:active {
  transform: scale(0.95) translateY(2px);
}
}
</style>