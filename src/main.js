import './assets/main.css'

import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import eventBus from './eventBus'

let socket;

async function getDID(handle) {
  try {
    const response = await fetch(`https://bsky.social/xrpc/com.atproto.identity.resolveHandle?handle=${handle}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data:', data);
    return data.did;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function getProfile(did) {
  try {
    const response = await fetch(`https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${did}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}


eventBus.on('connectEvent', async (payload) => {
  console.log('connectEvent:', payload);
  const did = await getDID(payload.handle);
  socket = new WebSocket(`wss://jetstream2.us-east.bsky.network/subscribe?wantedCollections=app.bsky.graph.block&wantedDids=${did}`);

  // Event: Connection established
  socket.onopen = () => {
    console.log('WebSocket connection established');
    // Send a message to the server
    socket.send(JSON.stringify({ message: "Hello, Server!" }));
  };

  // Event: Message received from server
  socket.onmessage = async (event) => {
    console.log('Message from server:', event.data);

    const item = JSON.parse(event.data)

    if (item.commit.operation === 'create') {
      const blockedDid = item.commit.record.subject;
      console.log('Blocked:', blockedDid);
      const profile = await getProfile(blockedDid);

      router.push({ path: '/card', query: { handle: profile.handle, displayName: profile.displayName, avatar: profile.avatar } });
    }
  };

  // Event: Error occurred
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  // Event: Connection closed
  socket.onclose = (event) => {
    console.log('WebSocket connection closed', event);
  };

  router.push({ path: '/wait' });
});

eventBus.on('disconnectEvent', (payload) => {
  console.log('disconnectEvent:', payload);

  if (socket) {
    socket.close(1000, 'Closing socket')
  }
  
  router.push({ path: '/' });
});


const app = createApp(App)

app.use(router)

app.mount('#app')
