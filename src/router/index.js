import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wait',
      name: 'wait',
      // route level code-splitting
      // this generates a separate chunk (Card.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WaitView.vue'),
    },    
    {
      path: '/card',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (Card.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue'),
    },
    {
      path: '/jail',
      name: 'jail',
      // route level code-splitting
      // this generates a separate chunk (Jail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JailView.vue'),
    },
  ],
})

export default router
