import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import BookDetails from '../views/BookDetails.vue'
//@ts-ignore
import Inventory from "../views/Inventory.vue"
//@ts-ignore
import Order from '../views/Order.vue'
import { authGuard } from "@bcwdev/auth0-vue"
import VueRouter from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Inventory
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
      path: "*",
      redirect: '/'
    },
    {
      path: "?#",
      redirect: '/'
    },
  ],

})