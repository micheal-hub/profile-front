<template>
  <form @submit.prevent="sendMessage">
    <input v-model="message" placeholder="Type a message" />
    <button type="submit">Send</button>
  </form>
</template>

<script>
import { socket } from '@/socket'

export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    sendMessage() {
      socket.emit('chat-message', this.message)
      this.message = ''
    },
  },
}
</script>
