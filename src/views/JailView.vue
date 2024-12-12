<script setup>
import eventBus from '@/eventBus';
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const handle = route.query.handle;
const displayName = route.query.displayName;
const avatar = route.query.avatar;

const disconnect = () => {
  eventBus.emit('disconnectEvent', null );
}

const wait = () => {
  router.push({ path: '/wait', query: { handle, displayName, avatar } });
}
</script>

<template>
  <div class="view-container">
    <div class="view-form">
      <h2>{{ displayName }}</h2>
      <button class="btn" @click="wait">Continue</button>
      <button class="btn" @click="disconnect">Disconnect</button>
    </div>
  </div>
</template>
<!-- 
<template>
  <div class="about">
    <h1>This is an Jail page</h1>
    <button @click="disconnect">Disconnect</button>

  </div>
</template> -->

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
