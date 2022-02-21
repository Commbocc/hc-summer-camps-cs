import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Camp from '../views/camp.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:camp', component: Camp },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
