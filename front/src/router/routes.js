import LoginPage from 'pages/LoginPage.vue'
import MenuLayout from 'layouts/MenuLayout.vue'
import IndexMenuPage from 'pages/IndexMenuPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/menu',
    component: MenuLayout,
    children: [
      { path: '', component: IndexMenuPage }
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
