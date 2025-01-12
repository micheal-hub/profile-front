import axios from 'axios'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}
const xsrfCookie = localStorage.getItem('xsrf-token')
if (xsrfCookie) {
  axios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfCookie
}
const lang = localStorage.getItem('lang')
if (lang) {
  axios.defaults.headers.common['Accept-Language'] = lang
}

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8012/websites/trad/public/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
})

export default axiosInstance
