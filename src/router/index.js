import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const isAuth = authStore().isAuthenticate

//   if (to.matched.some((record) => record.meta.requiresGuest) && isAuth) {
//     return next({ name: 'home' })
//   } else if (to.matched.some((record) => record.meta.requiresAuth) && !isAuth) {
//     return next({ name: 'login' })
//   }
//   next()
// })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
