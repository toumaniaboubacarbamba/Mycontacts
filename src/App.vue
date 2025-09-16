<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div class="min-h-screen bg-sage-100">
    <NavBarComponent />

    <RouterView />
  </div>
</template>
