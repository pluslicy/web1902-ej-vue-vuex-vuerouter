import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../pages/Category'
import Customer from '../pages/Customer'
import Product from '../pages/Product'
import Order from '../pages/Order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/customer',
    component:Customer
  },
  {
    path:'/product',
    component:Product
  },
  {
    path:'/order',
    component:Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
