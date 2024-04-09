import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";
import Subject1 from "./components/Subject1.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import Article from "./components/Article.vue";
import Profile from "./components/Profile.vue";

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
    { 
      path: '/article', 
      name:'Article',
      component: Article,
      params:true,
    },
    { 
      path: '/profile', 
      name:'Profile',
      component: Profile,
      params:true,
    },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
})

export default router;