import Vue from 'vue'
import Router from 'vue-router'
import Inventory from '../views/Inventory.vue'
import Boards from '../views/Boards.vue'
import Board from '../views/Board.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter: authGuard
    },
    {
      path: '/boards/:boardId',
      name: 'board',
      component: Board
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})