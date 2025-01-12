<template>
  <footer>
    <div class="top">
      <div class="content">con</div>
      <div class="links">link</div>
    </div>
    <div class="bottom">
      <span>
        All rights reserved <i class="bx bx-copyright"></i> {{ thisYear }} Micheal-Portfolio
      </span>
    </div>
  </footer>
</template>

<script>
import { Language } from '@/components/core/localization/index'

export default {
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      thisYear: new Date().getFullYear(),
    }
  },
  inject: ['emitter'],
  computed: {
    translate() {
      return Language[this.language]
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
::selection {
  color: var(--c-primary-selection);
  background-color: var(--bc-primary-selection);
}

@media (max-width: 991px) {
  /* Styles for medium devices */
  footer {
    background-color: var(--bc-footer);
    color: var(--c-footer);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--footer-padding);
    .top {
      display: flex;
      flex-direction: column;
      width: 100%;
      .content {
        width: 100%;
      }
      .links {
        width: 100%;
      }
    }
    .bottom {
      margin-top: 1rem;
      span {
        font-size: 0.8rem;
      }
    }
  }
}

@media (min-width: 992px) {
  /* Styles for extra large devices */
  footer {
    background-color: var(--bc-footer);
    color: var(--c-footer);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--footer-padding);
    .top {
      display: flex;
      width: 100%;
      .content {
        width: 50%;
      }
      .links {
        width: 50%;
      }
    }
    .bottom {
      margin-top: 1rem;
      span {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
