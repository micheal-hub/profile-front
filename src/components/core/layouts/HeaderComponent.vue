<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.jpg" alt="website-logo" />
    </div>
    <nav :class="`${dropMenu}`">
      <ul>
        <li>
          <router-link to="/" @click="closeMenuAfterClickLink">
            {{ translate.home }}
          </router-link>
        </li>
        <li>
          <router-link to="/about" @click="closeMenuAfterClickLink">
            {{ translate.about }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="setting-menu-container">
      <div :class="`setting ${dropMenu}`">
        <div class="search">
          <div class="search-container">
            <input type="text" class="search-input" :placeholder="translate.search" />
            <button class="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div class="language" @click="OpenCloseLang">
          <div class="language-container">
            <div class="current-language">
              <span class="language-name"> {{ currentLanguage }} </span>
              <span class="language-drop-icon">
                {{ languageIconStat ? '▲' : '▼' }}
              </span>
            </div>
            <div :class="`all-languages ${languageMenuStat}`">
              <div
                class="every-language"
                v-for="(lang, key) in languages"
                :key="key"
                @click="setLanguage(lang, key)"
              >
                {{ lang }}
              </div>
            </div>
          </div>
        </div>

        <div class="theme-toggle">
          <span class="theme-icon" @click="setTheme()">
            <i class="mdi mdi-weather-night" ref="theme_dark"></i>
            <i class="fa-regular fa-sun" ref="theme_light"></i>
          </span>
        </div>

        <div class="SocialCallContainer">
          <span @click="openCancelSocialCall">
            <i class="fa-solid fa-phone"></i>
          </span>
        </div>

        <div class="loginContainer">
          <span @click="openCancelAuth">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>

      <div class="menu">
        <div class="toggle_menu">
          <span>
            <i class="fa-solid fa-bars" ref="menu_open" @click="toggleMenu"></i>
            <i class="fa-solid fa-xmark" ref="menu_close" @click="toggleMenu"></i>
          </span>
        </div>
      </div>
    </div>
    <SocialComponent ref="callSocialSection" />
    <AuthComponent ref="authSection" />
  </header>
</template>

<script>
import { Language } from '@/components/core/localization/index'
import AuthComponent from '@/components/core/utils/auth/AuthComponent.vue'
import SocialComponent from '@/components/core/utils/social/SocialComponent.vue'

export default {
  data() {
    return {
      languages: {
        en: 'English',
        ar: 'العربية',
      },
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      currentLanguage:
        localStorage.getItem('currentLanguageName') == null
          ? 'English'
          : localStorage.getItem('currentLanguageName'),
      languageIconStat: false,
      languageMenuStat: 'close',
      theme: localStorage.getItem('theme') == null ? 'light' : localStorage.getItem('theme'),
      dropMenu: '',
    }
  },
  inject: ['emitter'],
  components: { SocialComponent, AuthComponent },
  computed: {
    translate() {
      return Language[this.language]
    },
  },
  methods: {
    setLanguage(languageName, languageCode) {
      localStorage.setItem('language', languageCode)
      this.language = localStorage.getItem('language')
      localStorage.setItem('currentLanguageName', languageName)
      this.currentLanguage = localStorage.getItem('currentLanguageName')
      this.emitter.emit('setLanguage', languageCode)
    },
    setTheme() {
      localStorage.setItem('theme', this.theme === 'dark' ? 'light' : 'dark')
      this.theme = localStorage.getItem('theme')
      if (this.theme === 'dark') {
        this.$refs.theme_dark.style.opacity = 0
        this.$refs.theme_light.style.opacity = 1
      } else {
        this.$refs.theme_light.style.opacity = 0
        this.$refs.theme_dark.style.opacity = 1
      }
      this.emitter.emit('setTheme', this.theme)
    },
    toggleMenu() {
      this.dropMenu = this.dropMenu === '' ? 'dropMenu' : ''
      if (this.dropMenu === 'dropMenu') {
        this.$refs.menu_open.style.display = 'none'
        this.$refs.menu_close.style.display = 'block'
      } else {
        this.$refs.menu_close.style.display = 'none'
        this.$refs.menu_open.style.display = 'block'
      }
    },
    closeMenuAfterClickLink() {
      this.dropMenu = ''
      if (window.innerWidth <= 992) {
        this.$refs.menu_close.style.display = 'none'
        this.$refs.menu_open.style.display = 'block'
      }
    },
    OpenCloseLang() {
      this.languageIconStat = !this.languageIconStat
      this.languageMenuStat = this.languageIconStat === true ? 'open' : 'close'
    },
    openCancelSocialCall() {
      if (this.$refs.callSocialSection.isVisible) {
        this.$refs.callSocialSection.onCancel()
      } else {
        this.$refs.callSocialSection.open()
      }
    },
    openCancelAuth() {
      if (this.$refs.authSection.isVisible) {
        this.$refs.authSection.onCancel()
      } else {
        this.$refs.authSection.open()
      }
    },
  },
  mounted() {
    ;(() => {
      if (this.theme === 'dark') {
        this.$refs.theme_dark.style.opacity = 0
        this.$refs.theme_light.style.opacity = 1
      } else {
        this.$refs.theme_light.style.opacity = 0
        this.$refs.theme_dark.style.opacity = 1
      }
    })()
    ;(window.onresize = () => {
      if (window.innerWidth >= 992) {
        this.dropMenu = ''
        this.$refs.menu_close.style.display = 'none'
        this.$refs.menu_open.style.display = 'none'
      } else {
        if (this.dropMenu === 'dropMenu') {
          this.$refs.menu_open.style.display = 'none'
        } else {
          this.$refs.menu_open.style.display = 'block'
        }
      }
    })()
    ;(() => {
      if (window.innerWidth >= 992) {
        this.dropMenu = ''
        this.$refs.menu_close.style.display = 'none'
        this.$refs.menu_open.style.display = 'none'
      } else {
        this.dropMenu = ''
        this.$refs.menu_close.style.display = 'none'
        this.$refs.menu_open.style.display = 'block'
      }
    })()
  },
}
</script>

<style lang="scss" scoped>
::selection {
  color: var(--c-primary-selection);
  background-color: var(--bc-primary-selection);
}

header {
  background-color: var(--bc-header);
  height: var(--height-header);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--general-padding);

  .logo {
    width: 50px;
    height: 50px;
    border: 1px solid var(--c-border-logo);
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        cursor: pointer;
        a {
          color: var(--c-link);
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--c-link-hover);
          }
          &.router-link-active {
            color: var(--c-link-active);
            font-weight: bolder;
          }
        }
      }
    }
  }

  .setting-menu-container {
    .setting {
      display: flex;
      justify-content: center;
      align-items: center;

      .search-container {
        display: flex;
        align-items: center;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        background-color: var(--bc-search);
        .search-input {
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          height: 30px;
          outline: none;
          width: clamp(130px, 130px + 20vw, 200px);
          border-radius: 25px;
          &::placeholder {
            color: var(--c-placeholder-search);
          }
        }
        .search-button {
          background-color: var(--bc-search-button);
          border: none;
          color: var(--c-search-icon);
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          transition: background-color 0.3s;
          &:hover {
            background-color: var(--bc-search-button-hover);
          }
        }
      }

      .language {
        .language-container {
          background-color: var(--bc-language);
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          .current-language {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 0.8px 10px;
            .language-name {
              color: var(--c-language-name);
              font-weight: bold;
            }
            .language-drop-icon {
              color: var(--c-language-icon);
            }
          }
          .all-languages {
            position: absolute;
            top: calc(100% + 4px);
            left: 0;
            width: 100%;
            background-color: var(--bc-language);
            color: var(--c-language-name);
            border: 1px solid var(--bc-language-border);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            padding: 10px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: all 0.5s ease;

            &.open {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
            .every-language {
              display: inline-block;
              text-align: center;
              width: 100%;
              &:hover {
                background-color: var(--bc-language-hover);
                color: var(--c-language-hover);
              }
            }
          }
        }
      }

      .theme-toggle {
        .theme-icon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;
          width: 50px;
          cursor: pointer;
          background-color: var(--bc-theme);
          padding: 3px;
          border-radius: 20px;
          i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background-color: var(--bc-theme-icon);
            color: var(--c-theme-icon);
            font-size: 14px;
            border-radius: 50%;
            transition: all 0.5s ease;
          }
        }
      }

      .SocialCallContainer,
      .loginContainer {
        cursor: pointer;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--bc-social-call);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px;
          i {
            color: var(--c-social-call);
            font-size: 16px;
            font-weight: 900;
          }
        }
      }
    }

    .menu {
      .toggle_menu {
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          i {
            font-size: 24px;
            color: var(--toggle-menu-color);
          }
        }
      }
    }
  }
}

.dropMenu {
  right: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--bc-header);
  padding: var(--dropMenu-padding);
  transition: all 0.4s ease-in-out;
}

@media (max-width: 575px) {
  /* Styles for mobile devices */
  nav,
  .setting {
    position: fixed;
    height: 0;
    overflow: hidden;
  }

  nav {
    &.dropMenu {
      top: calc(var(--height-header) + 140px);
      height: auto;
      border-bottom: 1px solid #fff;
      box-shadow: 0px 10px 17px -2px #b9b6b6;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .setting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &.dropMenu {
      top: var(--height-header);
      height: 140px;
      border-top: 1px solid #fff;
      overflow: visible;
    }
  }
  ul {
    gap: 15px;
  }
  .setting {
    gap: 10px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Styles for small devices */
  nav,
  .setting {
    position: fixed;
    height: 0;
    overflow: hidden;
  }

  nav {
    &.dropMenu {
      top: calc(var(--height-header) + 60px);
      height: auto;
      border-bottom: 1px solid #fff;
      box-shadow: 0px 10px 17px -2px #b9b6b6;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .setting {
    &.dropMenu {
      top: var(--height-header);
      height: 60px;
      border-top: 1px solid #fff;
      overflow: visible;
    }
  }
  ul {
    gap: 15px;
  }
  .setting {
    gap: 10px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium devices */
  nav,
  .setting {
    position: fixed;
    height: 0;
    overflow: hidden;
  }

  nav {
    &.dropMenu {
      top: calc(var(--height-header) + 60px);
      height: auto;
      /*border-top: 1px solid #fff;*/
      border-bottom: 1px solid #fff;
      box-shadow: 0px 10px 17px -2px #b9b6b6;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .setting {
    &.dropMenu {
      top: var(--height-header);
      height: 60px;
      border-top: 1px solid #fff;
      overflow: visible;
    }
  }
  ul {
    gap: 15px;
  }
  .setting {
    gap: 10px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  /* Styles for large devices */
  ul {
    gap: 15px;
  }
  .setting {
    gap: 10px;
  }
}

@media (min-width: 1200px) {
  /* Styles for extra large devices */
  ul {
    gap: 20px;
  }
  .setting {
    gap: 15px;
  }
}
</style>
