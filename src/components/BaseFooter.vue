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
  width: 80vw;
  border-radius: 0 0 25px 25px;
  outline: 4px solid $outline-color;
  p {
    font-size: 1rem;
    font-weight: 300;
  }
}
</style>
