<template>
  <div class="contact-form">
    <h2 style="text-align: center;" class="form-title">Create New Contact</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" id="company" name="company" required>
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" required>
      </div>
      <div class="form-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes" required></textarea>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select id="status" name="status" required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" class="submit-btn">Create</button>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.contact-form {
  width: 100%;
  padding: 1.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }

  .form-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: $primary-green;
    text-align: center;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    color: #333;
  }

  input,
  select,
  textarea {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid $primary-yellow;

    &:focus {
      outline: 2px solid $primary-green;
    }
  }
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
  background-color: $primary-green;
  color: $primary-yellow;
  border: none;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: translateY(1px);
  }
}
</style>
