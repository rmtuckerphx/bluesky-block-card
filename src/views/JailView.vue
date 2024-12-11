<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const disconnect = () => {
  router.push({ path: '/' });
}
</script>

<template>
  <div class="about">
    <h1>This is an Jail page</h1>
    <button @click="disconnect">Disconnect</button>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
