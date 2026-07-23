import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path:'/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router