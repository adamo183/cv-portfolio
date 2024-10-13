import { createRouter, createWebHistory } from 'vue-router'
import AboutMeView from '../components/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'aboutme',
      component: AboutMeView
    },
  ]
})

export default router
