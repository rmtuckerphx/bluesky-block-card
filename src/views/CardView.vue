<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goToJail = () => {
  router.push({ path: '/jail' });
}
</script>

<template>
  <div class="about">
    <h1>This is an Card page</h1>
    <button @click="goToJail">Next ></button>
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
