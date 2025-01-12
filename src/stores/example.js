import { defineStore } from 'pinia'
import axios from '@/axios/index'
import API_LINK from '@/components/core/constant/API_LINK'

export const useExampleStore = defineStore('example', {
  state: () => ({
    data: null,
  }),
  getters: {},
  actions: {
    async fetchData() {
      try {
        const response = await axios.get(API_LINK.HOME)
        this.data = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
})
