import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../pages/Category'
import Customer from '../pages/Customer'
import Product from '../pages/Product'
import Order from '../pages/Order'
import CustomerDetails from '../pages/CustomerDetails'
import Check from '../pages/check/Index'
import WaiterCheck from '../pages/check/WaiterCheck'
import WithdrawCheck from '../pages/check/WithdrawCheck'

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
    path:'/customerDetails',
    component:CustomerDetails
  },
  {
    path:'/product',
    component:Product
  },
  {
    path:'/order',
    component:Order
  },{
    path:'/check',
    component:Check,
    children:[{
      path:'waiter_check',
      component:WaiterCheck
    },{
      path:'withdraw_check',
      component:WithdrawCheck
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
