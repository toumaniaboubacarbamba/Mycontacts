import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ContactView from '@/views/ContactView.vue'
import ContactDetails from '@/views/ContactDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactView,
    },
    {
      path: '/contacts/:id',
      name: 'ContactDetails',
      component: ContactDetails,
    },
  ],
})

export default router
