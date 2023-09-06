import LoginPage from 'pages/LoginPage.vue'
import MenuLayout from 'layouts/MenuLayout.vue'
import IndexMenuPage from 'pages/IndexMenuPage.vue'
import Dia13Page from 'pages/Dia13Page.vue'
import UserPage from 'pages/UserPage.vue'
import PerfilPage from 'pages/PerfilPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/programa', component: () => import('pages/ProgramaPage.vue') },
      { path: '/contacto', component: () => import('pages/ContactoPage.vue') },
      { path: '/mapa', component: () => import('pages/MapaPage.vue') }
    ]
  },
  {
    path: '/menu',
    component: MenuLayout,
    children: [
      { path: '', component: IndexMenuPage, meta: { requiresAuth: true } },
      { path: '/dia13/:date', component: Dia13Page, meta: { requiresAuth: true } },
      { path: '/users', component: UserPage, meta: { requiresAuth: true } },
      { path: '/perfil', component: PerfilPage, meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: LoginPage
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
