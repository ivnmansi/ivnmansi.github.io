import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
    { path: '/about', name: 'About', component: () => import('../views/About.vue') },
    { path: '/skills', name: 'Skills', component: () => import('../views/Skills.vue') },
    { path: '/projects', name: 'Projects', component: () => import('../views/Projects.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
