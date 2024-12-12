<script setup>
import eventBus from '@/eventBus';
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const handle = route.query.handle || "";
const displayName = route.query.displayName || "";
const avatar = route.query.avatar || "";

const disconnect = () => {
  eventBus.emit('disconnectEvent', null);
}

const wait = () => {
  router.push({ path: '/wait', query: { handle, displayName, avatar } });
}
</script>

<template>
  <div class="view-container">
    <div class="view-form">
      <div class="profile-picture">
        <img :src="avatar" alt="Blocked avatar">
      </div>
      <div class="displayName">{{ displayName }}</div>
      <div class="handle">{{ handle }}</div>
      <button class="btn" @click="wait">Continue</button>
      <button class="btn" @click="disconnect">Disconnect</button>
    </div>
  </div>
</template>

<style>
.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #262626;
  margin-bottom: 10px;
  align-content: center;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.display-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.handle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}
</style>
