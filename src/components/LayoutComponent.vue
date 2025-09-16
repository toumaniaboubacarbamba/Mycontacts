<template>
  <div class="min-h-screen bg-sage-100">
    <NavBarComponent />

    <main class="max-w-4xl mx-auto-p6">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
</script>
