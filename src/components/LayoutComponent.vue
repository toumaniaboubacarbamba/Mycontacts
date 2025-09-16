<template>
  <div class="min-h-screen bg-sage-100">
    <NavBar />
    <main class="max-w-4xl mx-auto-p6">
      <slot />
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
</script>
