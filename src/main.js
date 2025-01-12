import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/index'

const emitter = mitt()

const app = createApp(App)

app.use(createPinia())
// app.config.globalProperties.emitter = emitter
app.provide('emitter', emitter)
app.use(vuetify)
app.use(router)

app.directive('truncate', {
  beforeMount(el, binding) {
    const maxLength = binding.value || 100 // Default to 100 characters if no value is provided
    const text = el.textContent

    if (text.length > maxLength) {
      el.textContent = text.slice(0, maxLength) + '...' // Truncate and add ellipsis
    }
  },
})

app.config.globalProperties.$truncate = function (text, maxLength) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...' // Truncate and add ellipsis
}

app.mount('#app')
