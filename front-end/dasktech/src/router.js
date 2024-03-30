import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";
import Subject1 from "./components/Subject1.vue";

const routes = [
    { 
      path: '/', 
      name:'Home',
      component: Home
    },
    { 
      path: '/subject1', 
      name:'Subject1',
      component: Subject1
    },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
})

export default router;