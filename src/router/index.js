import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import BuatLaporan from '../views/BuatLaporan.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
  path: '/register',
  name: 'Register',
  component: Register
 },
 {
  path: '/buatlaporan',
  name: 'BuatLaporan',
  component: BuatLaporan
 }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
