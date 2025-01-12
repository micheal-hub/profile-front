<template>
  <div v-if="isVisible" class="alert wow fadeIn">
    <div>
      <div class="title">{{ title }}</div>
      <div class="message">{{ message }}</div>
      <div class="warning">{{ warning }}</div>
    </div>
    <div>
      <succes-button :btnName="translate.confirm" @success="onConfirm" />
      <danger-button :btnName="translate.cancel" @danger="onCancel" />
    </div>
  </div>
</template>

<script>
import SuccesButton from '@/components/core/utils/buttons/SuccesButton.vue'
import DangerButton from '@/components/core/utils/buttons/DangerButton.vue'
import { Language } from '@/components/core/localization/index'

export default {
  props: ['title', 'message', 'warning'],
  emits: ['confirm'],
  inject: ['emitter'],
  components: {
    SuccesButton,
    DangerButton,
  },
  data() {
    return {
      isVisible: false,
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
    }
  },
  computed: {
    translate() {
      return Language[this.language]
    },
  },
  methods: {
    open() {
      this.isVisible = true
    },
    onConfirm() {
      this.$emit('confirm')
      this.isVisible = false
    },
    onCancel() {
      this.isVisible = false
    },
  },
  mounted() {
    this.emitter.on('setLanguage', (language) => {
      this.language = language
    })
  },
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid var(--c-border-alert);
  background-color: var(--bc-alert);
  color: var(--c-alert);
}

button {
  margin-right: 10px;
}

.title {
  font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
  font-weight: bold;
  color: black;
}
.message {
  font-size: clamp(0.8rem, 1vw + 0.8rem, 1.5rem);
  color: rgb(39, 37, 37);
}
.warning {
  font-size: clamp(0.5rem, 1vw + 0.5rem, 1rem);
  color: rgb(201, 65, 65);
}
</style>
