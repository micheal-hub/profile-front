<template>
  <div v-if="isVisible" class="alert wow fadeInLeft">
    <div class="close">
      <i class="bx bx-menu" @click="onCancel"></i>
    </div>
    <div class="alert-header">
      <div class="section-container">
        <div class="title">
          {{ translate.social }}
        </div>
        <div class="section">
          <span v-for="socialLink in socialLinks" :key="socialLink.name">
            <a :href="socialLink.link">
              <div>
                <i :class="socialLink.icon"></i>
                <span>{{ socialLink.name }}</span>
              </div>
            </a>
          </span>
          <span v-for="socialLink in socialLinks" :key="socialLink.name">
            <a :href="socialLink.link">
              <div>
                <i :class="socialLink.icon"></i>
                <span>{{ socialLink.name }}</span>
              </div>
            </a>
          </span>
        </div>
      </div>
      <div class="section-container">
        <div class="title">
          {{ translate.contact }}
        </div>
        <div class="section">
          <span v-for="callLink in callLinks" :key="callLink.name">
            <a :href="callLink.link">
              <div>
                <i :class="callLink.icon"></i>
                <span>{{ callLink.name }}</span>
                <span v-if="callLink.number">{{ callLink.number }}</span>
              </div>
            </a>
          </span>
          <span v-for="callLink in callLinks" :key="callLink.name">
            <a :href="callLink.link">
              <div>
                <i :class="callLink.icon"></i>
                <span>{{ callLink.name }}</span>
                <span v-if="callLink.number">{{ callLink.number }}</span>
              </div>
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="alert-footer">
      <danger-button :btnName="translate.cancel" @danger="onCancel" />
    </div>
  </div>
</template>

<script>
import DangerButton from '@/components/core/utils/buttons/DangerButton.vue'
import { Language } from '@/components/core/localization/index'

export default {
  emits: ['confirm'],
  inject: ['emitter'],
  components: {
    DangerButton,
  },
  data() {
    return {
      isVisible: false,
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      callLinks: [
        {
          name: 'phone',
          icon: 'bx bx-mobile',
          link: 'tel:+79965406181',
          number: '+7 (996) 540-61-81',
        },
        {
          name: 'massenger',
          icon: 'fa-brands fa-facebook-messenger',
          link: 'https://www.messenger.com/t/7995323490533435/',
        },
        {
          name: 'instagram',
          icon: 'bx bxl-instagram',
          link: 'https://www.instagram.com/direct/t/17843074268340093/',
        },
        {
          name: 'vkontakte',
          icon: 'bx bxl-vk',
          link: 'https://vk.com/im?sel=601321750',
        },
        {
          name: 'email',
          icon: 'bx bxl-gmail',
          link: 'mailto:7kk7elmk13@gmail.com',
        },
        {
          name: 'whatsapp',
          icon: 'bx bxl-whatsapp',
          link: 'http://api.whatsapp.com/send?phone=79965906181',
        },
        {
          name: 'viber',
          icon: 'fa-brands fa-viber',
          link: 'viber://chat?number=+79965906181',
        },
        {
          name: 'telegram',
          icon: 'bx bxl-telegram',
          link: 'https://telegram.im/@hakk7elmk13',
        },
      ],
      socialLinks: [
        {
          name: 'github',
          icon: 'bx bxl-github',
          link: 'https://github.com/hakk7elmk13',
        },
        {
          name: 'facebook',
          icon: 'bx bxl-facebook-circle',
          link: 'https://t.me/hakk7elmk13',
        },
        {
          name: 'instgram',
          icon: 'bx bxl-instagram',
          link: 'https://t.me/hakk7elmk13',
        },
        {
          name: 'vkontakte',
          icon: 'bx bxl-vk',
          link: 'https://vk.com/im?sel=601321750',
        },
        {
          name: 'x-twitter',
          icon: 'fa-brands fa-x-twitter',
          link: 'https://t.me/hakk7elmk13',
        },
        {
          name: 'thread',
          icon: 'fa-brands fa-threads',
          link: 'https://t.me/hakk7elmk13',
        },
        {
          name: 'TikTok',
          icon: 'bx bxl-tiktok',
          link: 'https://t.me/hakk7elmk13',
        },
        {
          name: 'youtube',
          icon: 'bx bxl-youtube',
          link: 'https://t.me/hakk7elmk13',
        },
      ],
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
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-button {
  background: var(--bc-scrollbar-button);
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
}

::-webkit-scrollbar-button:hover {
  background: var(--hover-link);
}

::-webkit-scrollbar-track {
  background: var(--bc-scrollbar-track);
}

::-webkit-scrollbar-track:hover {
  background: var(--bc-scrollbar-track-hover);
}

::-webkit-scrollbar-thumb {
  background: var(--bc-scrollbar-thumb);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--bc-scrollbar-thumb-hover);
}

.alert {
  position: fixed;
  top: var(--height-header);
  left: 0;
  z-index: 1000;
  width: 250px;
  height: 100vh;
  padding: 10px;
  border: 1px solid black;
  background-color: var(--bc-alert);
  color: var(--c-alert);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .close {
    color: #fff;
    height: 10px;
    i {
      font-size: 28px;
      cursor: pointer;
    }
  }

  .alert-header {
    overflow-y: auto;
    height: 70vh;
    .title {
      font-size: 18px;
    }
    .section {
      span {
        a {
          div {
            i {
              font-size: small;
            }
            span {
              font-size: small;
            }
          }
        }
      }
    }
  }
}

i {
  &.bx-mobile {
    color: #5f6463;
  }
  &.bxl-gmail {
    color: #ea4335;
  }
  &.fa-facebook-messenger {
    background: linear-gradient(45deg, #00c6ff 0%, #0072ff 50%, #ff4e50 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;
    overflow: hidden;
  }
  &.bxl-whatsapp {
    color: #25d366;
  }
  &.fa-viber {
    color: #7360f2;
  }
  &.bxl-telegram {
    color: #0088cc;
  }
  &.bxl-vk {
    color: #4c75a3;
  }
  &.bxl-instagram {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    -webkit-text-fill-color: transparent; /* Make the text color transparent */
    -webkit-background-clip: text; /* Apply the text color to the background */
    background-clip: text; /* Apply the text color to the background */
    display: inline-block; /* Ensure the icon behaves like a block element */
    overflow: hidden; /* Hide any overflow */
  }
  &.bxl-github {
    color: #5f6463;
  }
  &.bxl-facebook-circle {
    color: #0088cc;
  }
  &.fa-x-twitter,
  &.fa-threads {
    color: #000000;
  }
  &.bxl-tiktok {
    color: #000000;
    text-shadow:
      1px 1px 0 #ff0050,
      -1px -1px 0 #00f2ea;
  }
  &.bxl-youtube {
    color: #ff0000;
  }
}
</style>
