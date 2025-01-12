<template>
  <div class="view-container">
    <ProfileComponent />
  </div>
</template>

<script>
import { Language } from '@/components/core/localization/index'
import LandingComponent from '@/components/home/landing/LandingComponent.vue'
import ProfileComponent from '@/components/home/profile/ProfileComponent.vue'

export default {
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
    }
  },
  inject: ['emitter'],
  computed: {
    translate() {
      return Language[this.language]
    },
  },
  methods: {},
  components: { LandingComponent, ProfileComponent },
  mounted() {
    this.emitter.on('setLanguage', (language) => {
      this.language = language
    })
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 575px) {
  /* Styles for mobile devices */
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Styles for small devices */
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium devices */
}

@media (min-width: 992px) and (max-width: 1199px) {
  /* Styles for large devices */
}

@media (min-width: 1200px) {
  /* Styles for extra large devices */
}
</style>
