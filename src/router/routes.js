import HomeView from '../views/HomeView.vue'
import ExampleView from '../views/ExampleView.vue'

export const routes = [
  {
    path: '/example',
    name: 'example',
    component: ExampleView,
    meta: { title: 'Example' },
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About Us' },
  },
]
