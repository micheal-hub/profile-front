// src/socket.js
import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  messages: [],
})

// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
const URL = 'http://localhost:3000'
export const socket = io(URL)

socket.on('connect', () => {
  state.connected = true
})

socket.on('disconnect', () => {
  state.connected = false
})

socket.on('chat-message', (message) => {
  state.messages.push(message)
})
