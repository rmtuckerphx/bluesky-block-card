<script setup>
import eventBus from '@/eventBus';

const disconnect = () => {
  eventBus.emit('disconnectEvent', null );
}
</script>

<template>
    <div class="view-container">
      <div class="view-form">
        <h2>Waiting for you to block an account in Bluesky app...</h2>
        <button class="btn" @click="disconnect">Disconnect</button>
      </div>
    </div>
</template>

