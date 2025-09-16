<template>
  <nav class="bg-[#CF5C36] text-[#050517] shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 items-center justify-between">
      <h1 class="text-xl font-bold">MyContacts</h1>

      <ul class="flex space-x-6">
        <li>
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts" class="nav-link">Contacts</RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/register" class="nav-link">Register</RouterLink>
        </li>
        <li>
          <button @click="logout" class="nav-link">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
const logout = () => {
  router.push({ name: 'Login' })
}
</script>

<style scoped>
.nav-link {
  color: #050517;
  font-weight: 500;
  transition: color 0.2s;
}
</style>
