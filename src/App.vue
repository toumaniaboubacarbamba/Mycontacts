<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div class="min-h-screen bg-sage-100">
    <NavBarComponent />

    <RouterView />

    <FooterComponent />
  </div>
</template>
