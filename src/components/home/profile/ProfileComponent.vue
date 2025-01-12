<template>
  <article>
    <div class="section-container">
      <div class="profile wow fadeInLeft">
        <div class="profile-pic">
          <img :src="profilePic" alt="profile picture" />
        </div>
        <div class="name">
          <h2>{{ name }}</h2>
        </div>
      </div>
      <div class="info wow fadeInRight">
        <div class="title">
          <h2>Profile Details</h2>
        </div>
        <div class="details">
          <div>
            <span> Email : {{ email }}</span>
          </div>
          <div>
            <span> Age : {{ age }}</span>
          </div>
          <div>
            <span> Gender : {{ gender }}</span>
          </div>
          <div>
            <span> Phone : {{ phone }}</span>
          </div>
          <div>
            <span> Address : {{ address }}</span>
          </div>
        </div>
      </div>
      <div class="form wow fadeInUp">
        <div class="info-form">
          <form @submit.prevent>
            <div class="input-container">
              <div class="uploadeImage" @click="triggerFileInput('fileProfile')">
                <span>
                  <i class="fa-solid fa-plus"></i>
                  <span>Upload Image</span>
                </span>
              </div>
              <input
                type="file"
                ref="fileProfile"
                @change="onFileChange"
                accept="image/*"
                style="display: none"
                data-name="profile"
              />
            </div>
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
                v-model="age"
                class="input-field"
                placeholder=""
                required
              />
              <label for="age" class="floating-label">Your Age</label>
            </div>
            <div class="select-container">
              <select v-model="gender">
                <option value="" disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
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
            <div class="input-container">
              <input
                type="text"
                id="phone"
                v-model="address"
                class="input-field"
                placeholder=""
                required
              />
              <label for="address" class="floating-label">Your Address</label>
            </div>
          </form>
        </div>
        <div class="button-container">
          <SuccesButton btnName="Update Profile" @success="onConfirm" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { Language } from '@/components/core/localization/index'
import SuccesButton from '@/components/core/utils/buttons/SuccesButton.vue'
import { profileStore } from '@/stores/profileStore'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      language: localStorage.getItem('language') == null ? 'en' : localStorage.getItem('language'),
      name: '',
      email: '',
      profilePic:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAQIH/8QAKhABAAIBAwIEBgMBAAAAAAAAAAECAwQRIRJRMTJBYQUTIiNxgVJykTT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+qAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOuAAAAAAAAAAAAAAAAAEzFY3mdoGZqdROado4x+kdwWM2trXjHHVPf0VMmoy5J+q87e3CMMHeq38p/wBe65stfLktH7RhguYdbMTtm8veIXa2i1YmJ3jvDGT6PNOPJ0z5bTtINMAAAAAAAAAAAB1wBFq8nRp7THjPEMpf+Iz9uke6gsAAAAA3257chtvBRs0nqpWe8OvGCerDSfZ7QAAAAAAAAAAAAVPiMfbpPaVBc+IZJ6ox7RttvuprAAAAAAKNXSf89PwlVtFkm+KYmIjpnaFlAAAAAAAAAAAABQ+Ix9dJ9tlRo63FfJjjojeazyzvDx8VgAAAAA7StrztWN59IKL+gjbBv3stI8FJphpWfGI5SIAAAAAAAAAAAADJ1FPl5rx77tZV12Hqp8yPNWOY7wDPAUAAFr4fWZyWt2jb9qrV0uP5WGI9Z5n8lEoCAAAAAAAAAAAAAj1M/Yyf1esmSMdJvbfaGfn1Vs0TWIitJ/2QVwFAABs1n6Y/DGWsOtmkRW8RNY9fWCjQHK2i1YmPCXUAAAAAAAAAQ5dVixTta289o5Vr6+0+SkR+ZBfQZdVjx8b9U9oUMmfJk815mO3gjME2fU3zbxPFe0IQUAAAAAAWMGrviiKz9Vey7i1GPLt022ntLKEwbQyseoy4+K3nbtPKemv/AJ0/cSYLwixajHl8lue08SlAAAVdbktTHEVnbq8ZdAZroEABQAAAAAAAAAAAAjieOGnpclsmGLWnmJ2BBOAD/9k=',
      age: '',
      address: '',
      phone: '',
      gender: '',
      newPic: '',
    }
  },
  inject: ['emitter'],
  computed: {
    ...mapState(profileStore, ['dataProfile']),
    translate() {
      return Language[this.language]
    },
  },
  methods: {
    ...mapActions(profileStore, ['fetchData', 'updateProfile']),
    triggerFileInput(ref) {
      this.$refs[ref].click() // Trigger the file input click
    },
    onFileChange(event) {
      const file = event.target.files[0] // Get the selected file

      this.newPic = file

      if (file) {
        const reader = new FileReader() // Create a FileReader to read the file
        reader.onload = (e) => {
          this.profilePic = e.target.result
          // Set the image URL to the uploaded file
        }
        reader.readAsDataURL(file) // Read the file as a data URL
      }
    },

    async onConfirm() {
      let newData = {
        name: this.name,
        email: this.email,
        age: this.age,
        address: this.address,
        phone: this.phone,
        gender: this.gender,
        profile_picture: this.newPic,
      }
      await this.updateProfile(newData)
      this.name = this.dataProfile.data.name
      this.email = this.dataProfile.data.email
      this.age = this.dataProfile.data.age
      this.phone = this.dataProfile.data.phone
      this.address = this.dataProfile.data.address
      this.gender = this.dataProfile.data.gender
      this.profilePic = this.dataProfile.data.profile_picture
      console.log('Confirm')
    },
  },
  components: { SuccesButton },
  async created() {
    await this.fetchData()
    this.name = this.dataProfile.data.name
    this.email = this.dataProfile.data.email
    this.age = this.dataProfile.data.age
    this.phone = this.dataProfile.data.phone
    this.address = this.dataProfile.data.address
    this.gender = this.dataProfile.data.gender
    this.profilePic = this.dataProfile.data.profile_picture
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

article {
  min-height: var(--height-section);
  color: var(--c-primary-section);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.section-container {
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  .profile {
    background-color: var(--bc-primary-section);
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
    padding: 35px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    h2 {
      background: linear-gradient(45deg, pink, #3d3daf); /* Gradient colors */
      -webkit-background-clip: text; /* Clip the background to the text */
      -webkit-text-fill-color: transparent; /* Make the text color transparent */
      background-clip: text; /* For non-WebKit browsers */
    }
  }
  .info {
    background-color: var(--bc-primary-section);
    padding: 30px;
    min-height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    gap: 10px;
    h2 {
      background: linear-gradient(45deg, pink, #3d3daf); /* Gradient colors */
      -webkit-background-clip: text; /* Clip the background to the text */
      -webkit-text-fill-color: transparent; /* Make the text color transparent */
      background-clip: text; /* For non-WebKit browsers */
    }
    .details {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      border-radius: 20px;
    }
  }
  .form {
    background-color: var(--bc-primary-section);
    min-height: 300px;
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    .info-form {
      width: 100%;
      padding: 20px;
    }
  }
}

.button-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-color: #77797a; /* Change border color on focus */
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
  background-color: var(--bc-primary-section);
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

.uploadeImage {
  border: 1px solid;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px;
    background-color: var(--bc-primary-section);
  }
}

@media (max-width: 575px) {
  /* Styles for mobile devices */
  .profile {
    width: 100%;
  }
  .info {
    width: 100%;
  }
  .form {
    width: 100%;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  /* Styles for small devices */
  .profile {
    width: 100%;
  }
  .info {
    width: 100%;
  }
  .form {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium devices */
  .profile {
    width: 100%;
  }
  .info {
    width: 100%;
  }
  .form {
    width: 100%;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  /* Styles for large devices */
  .profile {
    width: 40%;
  }
  .info {
    width: calc(60% - 20px);
  }
  .form {
    width: 100%;
  }
}

@media (min-width: 1200px) {
  /* Styles for extra large devices */
  .profile {
    width: 40%;
  }
  .info {
    width: calc(60% - 20px);
  }
  .form {
    width: 100%;
  }
}
</style>
