<template>
  <article>
    <div class="section-container wow fadeIn">
      <div class="images">
        <div class="cover-photo">
          <div class="cover">
            <img :src="coverPhoto" alt="Cover Photo" />
          </div>
          <div class="edit-icon">
            <i class="fa-solid fa-pen-to-square" @click="triggerFileInput('fileCover')"></i>
            <input
              type="file"
              ref="fileCover"
              @change="onFileChange"
              accept="image/*"
              style="display: none"
              data-name="cover"
            />
          </div>
        </div>
        <div class="profile-photo">
          <div class="profile">
            <img :src="profilePhoto" alt="Profile Photo" />
          </div>
          <div class="edit-icon">
            <i class="fa-solid fa-pen-to-square" @click="triggerFileInput('fileProfile')"></i>
            <input
              type="file"
              ref="fileProfile"
              @change="onFileChange"
              accept="image/*"
              style="display: none"
              data-name="profile"
            />
          </div>
          <div class="name">
            {{ name }}
          </div>
        </div>
      </div>
      <div class="info-form">
        <form @submit.prevent>
          <div class="input-container">
            <input
              type="text"
              id="name"
              class="input-field"
              placeholder=" "
              v-model="name"
              required
            />
            <label for="name" class="floating-label">Your Name</label>
          </div>
          <div class="input-container">
            <input
              type="text"
              id="email"
              v-model="email"
              class="input-field"
              placeholder=" "
              required
            />
            <label for="email" class="floating-label">Your Email</label>
          </div>
          <div class="input-container">
            <input
              type="text"
              id="phone"
              v-model="phone"
              class="input-field"
              placeholder=""
              required
            />
            <label for="phone" class="floating-label">Your Phone Number</label>
          </div>
          <div class="select-container">
            <select v-model="gender">
              <option value="" disabled selected>Select an option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </form>
      </div>
      <div class="button-container">
        <SuccesButton :btnName="translate.confirm" @success="onConfirm" />
      </div>
    </div>
  </article>
</template>

<script>
import { Language } from '@/components/core/localization/index'
import SuccesButton from '@/components/core/utils/buttons/SuccesButton.vue'

export default {
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      coverPhoto:
        'data:image/jpeg;base64,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',
      profilePhoto:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAQIH/8QAKhABAAIBAwIEBgMBAAAAAAAAAAECAwQRIRJRMTJBYQUTIiNxgVJykTT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+qAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuAAAAAAAAAAAAAAAAAEzFY3mdoGZqdROado4x+kdwWM2trXjHHVPf0VMmoy5J+q87e3CMMHeq38p/wBe65stfLktH7RhguYdbMTtm8veIXa2i1YmJ3jvDGT6PNOPJ0z5bTtINMAAAAAAAAAAAB1wBFq8nRp7THjPEMpf+Iz9uke6gsAAAAA3257chtvBRs0nqpWe8OvGCerDSfZ7QAAAAAAAAAAAAVPiMfbpPaVBc+IZJ6ox7RttvuprAAAAAAKNXSf89PwlVtFkm+KYmIjpnaFlAAAAAAAAAAAABQ+Ix9dJ9tlRo63FfJjjojeazyzvDx8VgAAAAA7StrztWN59IKL+gjbBv3stI8FJphpWfGI5SIAAAAAAAAAAAADJ1FPl5rx77tZV12Hqp8yPNWOY7wDPAUAAFr4fWZyWt2jb9qrV0uP5WGI9Z5n8lEoCAAAAAAAAAAAAAj1M/Yyf1esmSMdJvbfaGfn1Vs0TWIitJ/2QVwFAABs1n6Y/DGWsOtmkRW8RNY9fWCjQHK2i1YmPCXUAAAAAAAAAQ5dVixTta289o5Vr6+0+SkR+ZBfQZdVjx8b9U9oUMmfJk815mO3gjME2fU3zbxPFe0IQUAAAAAAWMGrviiKz9Vey7i1GPLt022ntLKEwbQyseoy4+K3nbtPKemv/AJ0/cSYLwixajHl8lue08SlAAAVdbktTHEVnbq8ZdAZroEABQAAAAAAAAAAAAjieOGnpclsmGLWnmJ2BBOAD/9k=',
      name: 'User Name',
      email: 'user@example.com',
      phone: '',
      gender: '',
    }
  },
  inject: ['emitter'],
  computed: {
    translate() {
      return Language[this.language]
    },
  },
  methods: {
    triggerFileInput(ref) {
      this.$refs[ref].click() // Trigger the file input click
    },
    onFileChange(event) {
      const file = event.target.files[0] // Get the selected file

      if (file) {
        const reader = new FileReader() // Create a FileReader to read the file
        reader.onload = (e) => {
          if (event.target.dataset.name == 'profile') {
            this.profilePhoto = e.target.result
          } else {
            this.coverPhoto = e.target.result
          } // Set the image URL to the uploaded file
        }
        reader.readAsDataURL(file) // Read the file as a data URL
      }
    },
    onConfirm() {
      console.log('Confirm')
    },
  },
  components: { SuccesButton },
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-container {
  min-height: var(--height-section);
  background-color: #e2dcdc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
  .images {
    width: 100%;
    position: relative;
    .cover-photo {
      border-bottom: 2px solid black;
      position: relative;
      .cover {
        img {
          width: 100%;
          height: 300px;
        }
      }
      .edit-icon {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        font-size: 0.8rem;
        border-radius: 50%;
        cursor: pointer;
        background-color: black;
        color: gray;
        margin: 10px;
      }
    }
    .profile-photo {
      position: relative;
      width: 200px; // 200px;
      height: 200px;
      margin-top: -120px;
      border-radius: 50%;

      .profile {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid black;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: clamp(1.2rem, 1vw + 1rem, 2rem);
        margin-top: 10px;
        width: 100%;
        text-align: center;
      }
      .edit-icon {
        position: absolute;
        top: 133px;
        right: 7px;
        padding: 10px;
        border-radius: 50%;
        font-size: 0.8rem;
        cursor: pointer;
        background-color: black;
        color: gray;
      }
    }
  }

  .info-form {
    width: 100%;
    margin-top: 80px;
    padding: 20px;
  }

  .button-container {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.input-container {
  position: relative;
  margin: 20px 0;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #007bff; /* Change border color on focus */
}

.floating-label {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 16px;
  color: #999;
  transition: 0.2s ease all;
  pointer-events: none; /* Prevent pointer events on the label */
}

.input-field:focus + .floating-label,
.input-field:not(:placeholder-shown) + .floating-label {
  top: -10px; /* Move label up */
  left: 20px; /* Keep label aligned */
  font-size: 12px; /* Reduce font size */
  color: #007bff; /* Change label color on focus */
  background-color: #e2dcdc;
  padding-inline: 10px;
}

.select-container {
  width: 100%; /* Full width */
  position: relative;
}

select {
  width: 100%; /* Full width */
  padding: 10px 15px; /* Padding for the select box */
  border: 1px solid #ccc; /* Border color */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Font size */
  background-color: #fff; /* Background color */
  appearance: none; /* Remove default arrow */
  -webkit-appearance: none; /* Remove default arrow for Safari */
  -moz-appearance: none; /* Remove default arrow for Firefox */
  cursor: pointer; /* Change cursor to pointer */
  transition: border-color 0.3s; /* Transition for border color */
}

select:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none; /* Remove outline */
}

/* Custom arrow */
.select-container::after {
  content: '▼'; /* Custom arrow */
  position: absolute;
  right: 15px; /* Positioning the arrow */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Center vertically */
  pointer-events: none; /* Prevent pointer events on the arrow */
  color: #999; /* Arrow color */
}

@media (max-width: 575px) {
  /* Styles for mobile devices */
  .section-container {
    width: 98%;
  }
  .profile-photo {
    margin-inline: auto;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Styles for small devices */
  .section-container {
    width: 98%;
  }
  .profile-photo {
    margin-inline: 30px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium devices */
  .section-container {
    width: 98%;
  }
  .profile-photo {
    margin-inline: 30px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  /* Styles for large devices */
  .section-container {
    width: 90%;
  }
  .profile-photo {
    margin-inline: 30px;
  }
}

@media (min-width: 1200px) {
  /* Styles for extra large devices */
  .section-container {
    width: 80%;
  }
  .profile-photo {
    margin-inline: 30px;
  }
}
</style>
