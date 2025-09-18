<template>
  <footer class="bg-[#DADDD8] py-10 px-10 tracking-wide mt-auto">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
        <div>
          <p class="text-lg font-semibold">
            <RouterLink to="/">MyContacts</RouterLink>
          </p>
        </div>

        <ul class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
          <li><RouterLink to="/" class="text-[#000000] hover:underline text-base">Accueil</RouterLink></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">À propos</a></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">Services</a></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">Contact</a></li>
        </ul>
      </div>

      <hr class="my-6 border-gray-500" />

      <p class="text-center text-gray-500 text-base">© 2023 MyContacts. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
