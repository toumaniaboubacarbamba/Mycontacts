<template>
  <nav class="bg-[#DADDD8] text-[#050517] shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <h1 class="text-xl font-bold">MyContacts</h1>

      <ul class="flex space-x-6">
        <li>
          <RouterLink to="/" class="nav-link hover:underline text-base">Accueil</RouterLink>
        </li>
        <li v-if="isAuth">
          <RouterLink to="/contacts" class="nav-link hover:underline text-base">Contacts</RouterLink>
        </li>
        <li v-if="!isAuth">
          <RouterLink to="/login" class="nav-link hover:underline text-base">Login</RouterLink>
        </li>
        <li v-if="!isAuth">
          <RouterLink to="/register" class="nav-link hover:underline text-base">Register</RouterLink>
        </li>
        <li v-if="isAuth" class="flex items-center space-x-2">
          <span>Bonjour, {{ user?.name }}</span>
          <button @click="logout" class="nav-link">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { RouterLink, useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const authStore = useAuthStore()

const isAuth = computed(() => authStore.isAuth)
const user = computed(() => authStore.user)

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.nav-link {
  color: #050517;
  font-weight: 500;
  transition: color 0.2s;
}
</style>
