<template>
  <div :class="`${theme} ${direction}`">
    <!-- <HeaderComponent /> -->
    <body-component>
      <RouterView />
    </body-component>
    <!-- <FooterComponent /> -->
  </div>
</template>

<script>
import HeaderComponent from '@/components/core/layouts/HeaderComponent.vue'
import BodyComponent from '@/components/core/layouts/BodyComponent.vue'
import FooterComponent from '@/components/core/layouts/FooterComponent.vue'
import { Language } from '@/components/core/localization/index'

export default {
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      theme: localStorage.getItem('theme') == null ? 'light' : localStorage.getItem('theme'),
    }
  },
  computed: {
    direction() {
      return Language[this.language].direction
    },
  },
  inject: ['emitter'],
  components: {
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  },
  mounted() {
    this.emitter.on('setTheme', (theme) => {
      this.theme = theme
    })
    this.emitter.on('setLanguage', (language) => {
      this.language = language
    })
  },
}
</script>

<style lang="scss" scoped></style>
