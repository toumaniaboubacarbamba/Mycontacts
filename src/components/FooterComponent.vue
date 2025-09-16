<template>
  <footer class=" bg-[#DADDD8] py-10 px-10 tracking-wide">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
        <div>
          <p>
            <routerLink><router-link to="/" />MyContacts</routerLink>
          </p>
        </div>

        <ul class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">Home</a></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">About</a></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">Services</a></li>
          <li><a href="javascript:void(0)" class="text-[#000000] hover:underline text-base">Contact</a></li>
        </ul>
      </div>

      <hr class="my-6 border-gray-500" />

      <p class="text-center text-gray-300 text-base">© ReadymadeUI. All rights reserved.</p>
    </div>
  </footer>

</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router'
</script>
