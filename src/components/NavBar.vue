<template>
  <nav class="bg-[#CF5C36] text-[#050517] shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 items-center justify-between">
      <h1 class="text-xl font-bold">MyContacts</h1>

      <ul class="flex space-x-6">
        <li>
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="nav-link">Contacts</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="nav-link">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="nav-link">Register</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="nav-link">Logout</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router'
</script>
