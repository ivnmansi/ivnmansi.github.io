<script setup lang="ts">
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-surface-950 text-surface-0 flex w-full flex-col">

    <header>
      <Nav />
    </header>

    <main class="flex-grow flex w-full flex-col p-4">
      <router-view />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
