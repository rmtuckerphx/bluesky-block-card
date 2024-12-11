import './assets/main.css'

import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import eventBus from './eventBus'

// onMounted(() => {
  eventBus.on('connectEvent', (payload) => {
    console.log('connectEvent:', payload);
  });
// });

const app = createApp(App)

app.use(router)

app.mount('#app')
