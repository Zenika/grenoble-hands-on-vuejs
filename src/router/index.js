import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:cityName',
    name: 'City',
    props: true,
    component: City
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
