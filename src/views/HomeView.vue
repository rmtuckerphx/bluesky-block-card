<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import eventBus from '@/eventBus';

const handle = ref('marktucker.bsky.social');
const router = useRouter();

const connect = () => {
  eventBus.emit('connectEvent', { handle: handle.value });
  router.push({ path: '/card', query: { handle: handle.value } });
}
</script>

<template>
  <!-- <div class="view"> -->
    <div class="connect-container">
      <div class="connect-form">
        <h2>For Those About To Block</h2>
        <h3>(We Salute You)</h3>
        <div class="form-group">
          <label for="username">Bluesky Handle</label>
          <input type="text" v-model="handle" placeholder="name.bsky.social" required>
        </div>
        <button class="btn" @click="connect">Connect</button>
      </div>
    </div>
  <!-- </div> -->
</template>

<style>
/* .view {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

/* Connect Container */
.connect-container {
  width: 100%;
  max-width: 5400px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Form Styling */
.connect-form {
  display: flex;
  flex-direction: column;
}

.connect-form h2 {
  margin-bottom: 5px;
  text-align: center;
  color: #333;
}

.connect-form h3 {
  margin-bottom: 30px;
  text-align: center;
  color: #555;
}

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

/* Button */
.btn {
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 480px) {
  .connect-container {
    padding: 15px;
  }

  .connect-form h2 {
    font-size: 1.5rem;
  }

  .connect-form h3 {
    font-size: 1.0rem;
  }

  .form-group input {
    font-size: 14px;
  }

  .btn {
    font-size: 14px;
  }
}
</style>