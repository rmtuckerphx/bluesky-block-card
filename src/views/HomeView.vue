<script setup>
import { ref } from "vue";
import eventBus from '@/eventBus';

const handle = ref('marktucker.bsky.social');

const connect = () => {
  eventBus.emit('connectEvent', { handle: handle.value });
}
</script>

<template>
  <!-- <div class="view"> -->
    <div class="view-container">
      <div class="view-form">
        <h2>For Those About To Block</h2>
        <h3>(We Salute You)</h3>
        <div class="form-group">
          <label for="username">Your Bluesky Handle</label>
          <input type="text" v-model="handle" placeholder="name.bsky.social" required>
        </div>
        <button class="btn" @click="connect">Connect</button>
      </div>
    </div>
  <!-- </div> -->
</template>

<style scoped>
/* Form Group */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #007BFF;
  outline: none;
}

/* Responsive Design */
@media (max-width: 480px) {

  .form-group input {
    font-size: 14px;
  }
}
</style>