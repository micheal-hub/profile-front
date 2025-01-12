<template>
  <div v-if="isVisible" class="alert wow fadeIn">
    <div class="alert-header">
      <div class="social-container">
        <div class="title">
          {{ translate.social }}
        </div>
        <div class="social">
          <span v-for="socialLink in socialLinks" :key="socialLink.name">
            <a :href="socialLink.link" target="_blank">
              <div class="every-social">
                <i :class="socialLink.icon"></i>
                <span>{{ socialLink.name }}</span>
              </div>
            </a>
          </span>
        </div>
      </div>
      <hr />
      <div class="call-container">
        <div class="title">
          {{ translate.contact }}
        </div>
        <div class="call">
          <span v-for="callLink in callLinks" :key="callLink.name">
            <a :href="callLink.link" target="_blank">
              <div class="every-call">
                <i :class="callLink.icon"></i>
                <span>{{ callLink.name }}</span>
                <span class="number" v-if="callLink.number">{{ callLink.number }}</span>
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
import { Language } from '@/components/core/localization/index'
import DangerButton from '@/components/core/utils/buttons/DangerButton.vue'

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
      socialLinks: [
        {
          name: 'github',
          icon: 'fa-brands fa-github',
          link: 'https://github.com/micheal-hub',
        },
        {
          name: 'facebook',
          icon: 'fa-brands fa-square-facebook',
          link: 'https://www.facebook.com/profile.php?id=61571320449087',
        },
        {
          name: 'instgram',
          icon: 'fa-brands fa-square-instagram',
          link: 'https://www.instagram.com/fahmy8606/?next=%2F',
        },
        {
          name: 'vkontakte',
          icon: 'fa-brands fa-vk',
          link: 'https://vk.com/id1019914881',
        },
        {
          name: 'x-twitter',
          icon: 'fa-brands fa-x-twitter',
          link: 'https://x.com/michealpor52675?s=07',
        },
        {
          name: 'thread',
          icon: 'fa-brands fa-threads',
          link: 'https://www.threads.net/@fahmy8606',
        },
        {
          name: 'snapchat',
          icon: 'fa-brands fa-square-snapchat',
          link: 'https://www.snapchat.com/add/michealmina3313?share_id=Y3aWjEQ7GFo&locale=en-US',
        },
        {
          name: 'TikTok',
          icon: 'fa-brands fa-tiktok',
          link: 'https://www.tiktok.com/@micheal.web.devel?_t=ZS-8snpMmGcZNP&_r=1',
        },
        {
          name: 'youtube',
          icon: 'fa-brands fa-youtube',
          link: 'https://www.youtube.com/channel/UC8u-LGM0AU1OF46nbUoj4lw',
        },
      ],
      callLinks: [
        {
          name: 'phone',
          icon: 'fa-solid fa-mobile',
          link: 'tel:+201277506885',
          number: '+201277506885',
        },
        {
          name: 'massenger',
          icon: 'fa-brands fa-facebook-messenger',
          link: 'https://m.me/michealWebDeveloper123',
        },
        {
          name: 'whatsapp',
          icon: 'fa-brands fa-square-whatsapp',
          link: 'http://api.whatsapp.com/send?phone=201277506885',
        },
        {
          name: 'telegram',
          icon: 'fa-brands fa-telegram',
          link: 'https://t.me/michealWebDeveloper',
        },
        {
          name: 'viber',
          icon: 'fa-brands fa-viber',
          link: 'viber://chat?number=201277506885',
        },
        {
          name: 'email',
          icon: 'fa-solid fa-m',
          link: 'mailto:michealportfolio@gmail.com',
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
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80vw;
  border-radius: 10px;
  border: 1px solid var(--c-border-alert);
  background-color: var(--bc-alert);
  color: var(--c-alert);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .alert-header {
    width: 100%;
    display: flex;
    flex-direction: column;

    .social-container {
      .title {
        font-size: large;
        font-weight: bolder;
        padding: 10px;
        margin: 10px 0 10px 0;
        text-align: center;
        color: var(--c-link-active);
      }
      .social {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        span {
          a {
            text-decoration: none;
            color: var(--c-alert);
            .every-social {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              i {
                font-size: clamp(1.4rem, 3vw, 2rem);
              }
              span {
                font-size: clamp(0.6rem, 1vw, 1.2rem);
              }
            }
          }
        }
      }
    }

    .call-container {
      .title {
        font-size: large;
        font-weight: bolder;
        padding: 10px;
        margin: 10px 0 10px 0;
        text-align: center;
        color: var(--c-link-active);
      }
      .call {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        span {
          a {
            text-decoration: none;
            color: var(--c-alert);
            .every-call {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              i {
                font-size: clamp(1.4rem, 3vw, 2rem);
              }
              span {
                font-size: clamp(0.6rem, 1vw, 1.2rem);
              }
              .number {
                font-size: clamp(0.4rem, 2vw, 1rem);
              }
            }
          }
        }
      }
    }
  }
}

hr {
  border: 1px solid var(--c-border-alert);
  width: 100%;
  margin: 20px 0 0 0;
}

i {
  &.fa-mobile {
    color: #5f6463;
  }
  &.fa-m {
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
  &.fa-square-whatsapp {
    color: #25d366;
  }
  &.fa-viber {
    color: #7360f2;
  }
  &.fa-telegram {
    color: #0088cc;
  }
  &.fa-vk {
    color: #4c75a3;
  }
  &.fa-square-instagram {
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
  &.fa-github {
    color: #5f6463;
  }
  &.fa-square-facebook {
    color: #0088cc;
  }
  &.fa-x-twitter,
  &.fa-threads {
    color: #000000;
  }
  &.fa-tiktok {
    color: #000000;
    text-shadow:
      1px 1px 0 #ff0050,
      -1px -1px 0 #00f2ea;
  }
  &.fa-youtube {
    color: #ff0000;
  }
  &.fa-square-snapchat {
    color: #ffd43b;
  }
}
</style>
