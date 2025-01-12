<template>
  <article>
    <div class="section-container">
      <div class="title">
        {{ translate.direction === '' ? 'Eng / Micheal Mina' : 'م / مايكل مينا' }}
      </div>
      <div class="img">
        <img :src="`./assets/profile.jpg`" alt="" />
      </div>
      <div class="content">
        {{
          translate.direction === ''
            ? 'I am a professional Full-Stack Web Developer with over 2 years of experience in creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, utilizing technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, Vue.js, PHP, and Laravel.'
            : 'أنا مطور ويب شامل محترف ولدي أكثر من سنتين من الخبرة في إنشاء تطبيقات ويب ديناميكية ومتجاوبة. تكمن خبرتي في تطوير الواجهة الأمامية والخلفية، باستخدام تقنيات مثل HTML و CSS و Bootstrap و JavaScript و jQuery و Vue.js و PHP و Laravel.'
        }}
      </div>
      <div class="social">
        <a href="https://www.tiktok.com/@micheal.web.devel?_t=ZS-8snpMmGcZNP&_r=1" target="_blank">
          <i class="fa-brands fa-tiktok"> </i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61571320449087" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/fahmy8606/?next=%2F" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
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
  color: var(--c-secondary-selection);
  background-color: var(--bc-secondary-selection);
}

article {
  min-height: var(--height-section);
  background-color: var(--bc-secondary-section);
  color: var(--c-secondary-section);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.section-container {
  width: 94%;
  min-height: calc(var(--height-section) - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  .title {
    font-size: 24px;
  }

  .content {
    text-align: center;
  }
  .social {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    i {
      font-size: clamp(1rem, 3vw, 1.5rem);
      cursor: pointer;
      transition: transform 0.5s;
      &.fa-instagram {
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
      &.fa-tiktok {
        color: #000000;
        text-shadow:
          1px 1px 0 #ff0050,
          -1px -1px 0 #00f2ea;
      }
      &.fa-facebook {
        color: #0088cc;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

@media (max-width: 575px) {
  /* Styles for mobile devices */
  .content {
    width: 100%;
  }
  .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bc-primary-section);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Styles for small devices */
  .content {
    width: 80%;
  }
  .img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bc-primary-section);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium devices */
  .content {
    width: 80%;
  }
  .img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bc-primary-section);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  /* Styles for large devices */
  .content {
    width: 50%;
  }
  .img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bc-primary-section);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 1200px) {
  /* Styles for extra large devices */
  .content {
    width: 50%;
  }
  .img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--bc-primary-section);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
