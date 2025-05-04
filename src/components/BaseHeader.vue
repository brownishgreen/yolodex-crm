<template>
  <header>
    <div class="flex justify-between items-center">
      <img src="/src/assets/image/yolodex-logo.png" alt="Yolodex Logo"/>
      <div class="flex justify-between items-center">
        <p class="nav-item">About</p>
        <p class="nav-item">Contact</p>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
<style scoped lang="scss">
@use '@/styles/variables' as *;
header {
  background-color: $primary-green;
  padding: 1rem;
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
}
</style>