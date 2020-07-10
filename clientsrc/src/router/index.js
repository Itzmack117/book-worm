import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import BookDetails from '../views/BookDetails.vue'
//@ts-ignore
import Inventory from "../views/Inventory.vue"
//@ts-ignore
import Order from '../views/Order.vue'
import Home from "../views/Home.vue"
// @ts-ignore
import Invoice from '../views/Invoice.vue'
import { authGuard } from "@bcwdev/auth0-vue"
import VueRouter from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/bookDetails/:bookId',
      name: 'bookDetails',
      component: BookDetails
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice,
    },

    {
      path: "*",
      redirect: '/'
    },
    {
      path: "?#",
      redirect: '/'
    },
  ],

})