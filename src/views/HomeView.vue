<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const handle = ref('marktucker.bsky.social');
const router = useRouter();

const connect = () => {
  router.push({ path: '/card', query: { handle: handle.value } });
}
</script>

<template>
  <!-- <main>
    <TheWelcome />
     <button @click="connect">Connect</button>
  </main> -->
  <div>
    <h1>Enter Bluesky handle:</h1>
    <input v-model="bskyHandle" placeholder="name.bsky.social" />
    <button @click="connect">Connect</button>
  </div>
</template>
