<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'
import ContactPanel from './components/ContactPanel.vue'
</script>

<template>
  <div class="container">
    <div class="body-container">
      <BaseHeader />
      <ContactPanel />
      <BaseFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.container {
  .body-container {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .body-content {
    width: 100%;
      height: 100%;
      background-color: $primary-yellow;
    }
  }
}
</style>
