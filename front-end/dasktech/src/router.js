import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";
import Subject1 from "./components/Subject1.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";

const routes = [
    { 
      path: '/', 
      name:'Home',
      component: Home
    },
    { 
      path: '/subject', 
      name:'Subject',
      component: Subject1
    },
    { 
      path: '/sign_up', 
      name:'SignUp',
      component: SignUp
    },
    { 
      path: '/sign_in', 
      name:'SignIn',
      component: SignIn
    },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
})

export default router;