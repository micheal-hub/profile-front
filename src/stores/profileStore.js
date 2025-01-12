import apiLink from '@/components/core/constant/API_LINK'; // Import the Axios instance
import axios from 'axios';
import { defineStore } from 'pinia';

export const profileStore = defineStore('profileStore', {
  state: () => ({
    dataProfile: null,
  }),
  getters: {},
  actions: {
    async fetchData() {
      const response = await axios.post(`${apiLink.APILINK}${apiLink.PROFILE}`)
      this.dataProfile = response.data;
    },
    async updateProfile(data) {
      const response = await axios.post(`${apiLink.APILINK}${apiLink.PROFILEUPDATE}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
      this.dataProfile = response.data;
    },

  },
});
