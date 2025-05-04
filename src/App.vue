<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'

</script>

<template>
  <BaseHeader />
  <div class="container flex justify-center items-center">
    <div class="body-content flex justify-center items-center">

    </div>
  </div>
  <BaseFooter />
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.container {
  width: 100%;
  height: 100%;
  background-color: $primary-green;
  .body-content {
    width: 100%;
    height: 100%;
    background-color: $primary-yellow;
  }
}
</style>
