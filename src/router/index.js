import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City.vue'
import CreateCity from '@/views/CreateCity.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/create',
    name: 'CreateCity',
    component: CreateCity
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
