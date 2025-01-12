<template>
  <article>
    <div class="section-container">Example</div>
  </article>
</template>

<script>
import { Language } from '@/components/core/localization/index'

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
  components: {},
  mounted() {
    this.emitter.on('setLanguage', (language) => {
      this.language = language
    })
  },
}
</script>

<style lang="scss" scoped>
::selection {
  color: var(--c-primary-selection);
  background-color: var(--bc-primary-selection);
}

article {
  min-height: var(--height-section);
  background-color: var(--bc-primary-section);
  color: var(--c-primary-section);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.section-container {
  width: 98%;
  min-height: calc(var(--height-section) - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
}

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
