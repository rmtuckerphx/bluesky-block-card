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
      <div class="profile-container">
        <img :src="avatar" alt="Blocked avatar" class="profile-picture">
        <svg class="jail-bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
        <!-- Vertical Bars -->
        <rect x="0" y="0" width="150" height="150" stroke="rgba(1, 0, 0, 1)" stroke-width="6" fill="rgba(0,0,0,0)"></rect>
        <rect x="10" y="0" width="10" height="150" fill="rgba(0, 0, 0, 1)"></rect>
        <rect x="40" y="0" width="10" height="150" fill="rgba(0, 0, 0, 1)"></rect>
        <rect x="70" y="0" width="10" height="150" fill="rgba(0, 0, 0, 1)"></rect>
        <rect x="100" y="0" width="10" height="150" fill="rgba(0, 0, 0, 1)"></rect>
        <rect x="130" y="0" width="10" height="150" fill="rgba(0, 0, 0, 1)"></rect>
      </svg>        
      </div>
      <div class="display-name">{{ displayName }}</div>
      <div class="handle">{{ handle }}</div>
      <button class="btn" @click="wait">Continue</button>
      <button class="btn" @click="disconnect">Disconnect</button>
    </div>
  </div>
</template>

<style>
.profile-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

.profile-picture {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #848484;
}

.jail-bars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    animation: dropBars 1.5s ease-out forwards;
}

@keyframes dropBars {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

.display-name {
  font-size: 2.0rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.handle {
  font-size: 1.5rem;
  color: #333;
  text-align: center;
}
</style>
