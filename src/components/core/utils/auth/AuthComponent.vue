<template>
  <div v-if="isVisible" class="alert wow fadeIn">
    <div class="alert-header">
      <div class="signup" v-if="!isLogin">
        <h3>{{ translate.signup }}</h3>
        <form @submit.prevent>
          <a href="#" @click.prevent="isLogin = true">
            {{ translate.loginForm }} . {{ translate.login }}
          </a>
          <input type="text" id="username" :placeholder="translate.username" />
          <input type="email" id="email" :placeholder="translate.email" />
          <input type="text" id="age" :placeholder="translate.age" />
          <input type="text" id="phone" :placeholder="translate.phone" />
          <input type="password" id="password" :placeholder="translate.password" />
        </form>
      </div>

      <div class="login" v-if="isLogin">
        <h3>{{ translate.login }}</h3>
        <form @submit.prevent>
          <a href="#" @click.prevent="isLogin = false"
            >{{ translate.signupForm }} . {{ translate.signup }}
          </a>
          <input type="email" id="email" :placeholder="translate.email" />
          <input type="password" id="password" :placeholder="translate.password" />
        </form>
      </div>
    </div>
    <div class="alert-footer">
      <SuccesButton :btnName="translate.signup" @success="onCancel" v-if="!isLogin" />
      <SuccesButton :btnName="translate.login" @success="onCancel" v-if="isLogin" />
      <DangerButton :btnName="translate.cancel" @danger="onCancel" />
    </div>
  </div>
</template>

<script>
import { Language } from '@/components/core/localization/index'
import DangerButton from '@/components/core/utils/buttons/DangerButton.vue'
import SuccesButton from '@/components/core/utils/buttons/SuccesButton.vue'

export default {
  emits: ['confirm'],
  inject: ['emitter'],
  components: {
    SuccesButton,
    DangerButton,
  },
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      isVisible: false,
      isLogin: true,
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
  z-index: 1000;
  width: 80vw;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid var(--c-border-alert);
  background-color: var(--bc-alert);
  color: var(--c-alert);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .alert-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    .signup,
    .login {
      h3 {
        text-align: center;
        margin-bottom: 25px;
        color: var(--c-link-active);
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid var(--c-border-alert);
          background-color: var(--bc-alert);
          color: var(--c-alert);
          width: 100%;
          &::placeholder {
            color: var(--c-placeholder-alert);
          }
        }
        a {
          border: 1px solid var(--c-border-alert);
          text-decoration: none;
          background-color: var(--bc-secondary-section);
          color: var(--bc-alert);
          text-align: center;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bolder;
          font-size: clamp(0.4rem, 1vw + 0.5rem, 1rem);
          margin-bottom: 15px;
        }
      }
    }
  }

  .alert-footer {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>
