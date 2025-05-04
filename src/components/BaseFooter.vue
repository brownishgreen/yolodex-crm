<template>
  <footer class="text-sm text-center justify-center">
    <p>&copy; 2025 YOLODEX</p>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
footer {
  background-color: $primary-green;
  color: $primary-yellow;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  p {
    font-size: 1rem;
    font-weight: 300;
  }
}
</style>
