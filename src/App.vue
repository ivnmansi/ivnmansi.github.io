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
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
