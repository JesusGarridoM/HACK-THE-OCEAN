import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: HomeView
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component:  () => import('../views/Formulario.vue')
  },
  {
    path: '/mapa',
    name: 'mapa',
    component:  () => import('../views/Mapa.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
