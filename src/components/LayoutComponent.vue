<template>
  <div class="min-h-screen bg-sage-100 flex flex-col">
    <NavBarComponent />

    <main class="flex-1">
      <slot></slot>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';
</script>
