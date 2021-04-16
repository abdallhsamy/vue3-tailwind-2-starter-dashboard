import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
import Form from '../views/Form.vue'
import Signin from '../views/Signin.vue'
import Alert from '../views/Alert.vue'
import Breadcrumb from '../views/Breadcrumb.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: Breadcrumb
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
