import { createRouter, createWebHistory } from 'vue-router'
import Operations from '../views/Operations.vue'
import Vehicles from '../views/Vehicles.vue'
import Customers from '../views/Customers.vue'

const routes = [
  {
    path: '/',
    name: 'Operations',
    component: Operations
  },
  {
    path: '/veiculos',
    name: 'Veiculos',
    component: Vehicles 
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Customers
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router