import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WelecomScreen from '../views/WelecomScreen.vue'
import LoginScreen from '../components/auth/LoginScreen.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelecomScreen',
    component: WelecomScreen
  },
  {
    path: '/signin',
    name: 'LoginScreen',
    component: LoginScreen
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
