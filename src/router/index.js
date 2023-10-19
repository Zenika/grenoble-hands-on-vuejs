import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import City from '../views/CityView.vue'

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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
