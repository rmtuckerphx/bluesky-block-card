<script setup>
// import { computed } from 'vue';
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const handle = route.query.handle;
const displayName = route.query.displayName;
const avatar = route.query.avatar;

const goToJail = () => {
  router.push({ path: '/jail', query: { handle, displayName, avatar } });
}

const props = defineProps({
  handle: String,
  displayName: String,
  avatar: String
})

console.log('go props', props)
</script>

<template>
  <div class="view-container">
    <div class="view-form">
      <h2>{{ displayName }}</h2>
      <button class="btn" @click="goToJail">Visit the Fool</button>
    </div>
  </div>
</template>

<!-- <template>

  
  <div class="about">
    <h1>{{ displayName }}</h1>
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
        <text id="myText" x="50" y="150" font-size="24" fill="blue">{{ displayName }}</text>
    </svg>
    <button @click="goToJail">Just Visiting</button>
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
