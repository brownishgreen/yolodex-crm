<template>
  <footer class="text-sm text-center justify-center">
    <p>A minimalist relationship management app for everyone.</p>
    <p>&copy; 2025 YOLODEX</p>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
footer {
  background-color: $primary-green;
  color: $primary-yellow;
  height: 79.95px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  border-radius: 0 0 25px 25px;
  outline: 4px solid $outline-color;
  p {
    font-size: 1rem;
    font-weight: 300;
  }
}

@media (max-width: 768px) {
  footer {
    p {
      font-size: 0.7rem;
    }
  }
}
</style>
