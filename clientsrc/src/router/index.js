import Vue from 'vue'
import Router from 'vue-router'
import BookDetails from '../views/BookDetails.vue'
import Inventory from "../views/Inventory.vue"
import Order from '../views/Order.vue'
import { authGuard } from "@bcwdev/auth0-vue"

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
  ]
})