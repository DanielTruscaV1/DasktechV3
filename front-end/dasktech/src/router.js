import { createMemoryHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";

const routes = [
    { 
        path: '/', 
        component: Home
    },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})