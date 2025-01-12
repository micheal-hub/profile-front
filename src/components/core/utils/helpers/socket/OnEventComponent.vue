<template>
  <div>
    <p v-if="!connected">Connecting...</p>
    <p v-else>Connected!</p>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
import { state } from '@/socket/index.js'

export default {
  name: 'ChatComponent',
  computed: {
    connected() {
      return state.connected
    },
    messages() {
      return state.messages
    },
  },
}
</script>
