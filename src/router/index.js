import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventList
    },
    {
      path: '/events/:id',
      name: 'event-details',
      component: () => import('../views/EventDetails.vue')
    }
  ]
})

export default router