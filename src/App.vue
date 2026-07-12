<script setup lang="ts">
import { useColorMode } from 'bootstrap-vue-next'
import Nav from './components/Nav.vue'
const colorMode = useColorMode()
colorMode.value = 'dark'
</script>

<template>
  <div class="app-layout">
    <div class="particle-field" aria-hidden="true">
      <span v-for="particle in 14" :key="particle" class="page-particle"></span>
    </div>
    <header><Nav title="ivnmansi" /></header>
    <main class="main-content"><BContainer><router-view v-slot="{ Component }"><transition name="page" mode="out-in"><component :is="Component" /></transition></router-view></BContainer></main>
    <footer>Made with <font-awesome-icon icon="fa-brands fa-vuejs" />Vue.js</footer>
  </div>
</template>

<style>
.app-layout { display: flex; flex-direction: column; isolation: isolate; min-height: 100vh; overflow: hidden; position: relative; }
.app-layout > header, .app-layout > main, .app-layout > footer { position: relative; z-index: 1; }
.particle-field { inset: 0; overflow: hidden; pointer-events: none; position: fixed; z-index: 0; }
.page-particle { animation: drift 9s ease-in-out infinite; background: var(--red-400); border-radius: 50%; box-shadow: 0 0 14px rgba(251, 93, 93, .85); height: .22rem; opacity: .35; position: absolute; width: .22rem; }
.page-particle:nth-child(1) { animation-delay: -1s; left: 7%; top: 14%; }.page-particle:nth-child(2) { animation-delay: -4s; left: 24%; top: 77%; }.page-particle:nth-child(3) { animation-delay: -7s; left: 40%; top: 22%; }.page-particle:nth-child(4) { animation-delay: -2s; left: 57%; top: 65%; }.page-particle:nth-child(5) { animation-delay: -6s; left: 74%; top: 12%; }.page-particle:nth-child(6) { animation-delay: -3s; left: 91%; top: 42%; }.page-particle:nth-child(7) { animation-delay: -8s; left: 16%; top: 46%; }.page-particle:nth-child(8) { animation-delay: -5s; left: 34%; top: 93%; }.page-particle:nth-child(9) { animation-delay: -1.5s; left: 63%; top: 35%; }.page-particle:nth-child(10) { animation-delay: -4.5s; left: 84%; top: 83%; }.page-particle:nth-child(11) { animation-delay: -7.5s; left: 48%; top: 8%; }.page-particle:nth-child(12) { animation-delay: -2.5s; left: 4%; top: 89%; }.page-particle:nth-child(13) { animation-delay: -5.5s; left: 96%; top: 70%; }.page-particle:nth-child(14) { animation-delay: -3.5s; left: 70%; top: 94%; }
.main-content { flex: 1; padding: 1.5rem 0 4rem; }
footer { color: var(--muted); display: flex; font-family: "JetBrains Mono", monospace; font-size: .72rem; gap: .6rem; justify-content: center; padding: 1.5rem; }
.footer-dot { color: var(--red-400); }
.page-enter-active, .page-leave-active { transition: opacity .25s ease, transform .25s ease; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
@keyframes drift { 0%, 100% { opacity: .16; transform: translate3d(0, 0, 0) scale(.7); } 50% { opacity: .7; transform: translate3d(8px, -24px, 0) scale(1.35); } }
@media (prefers-reduced-motion: reduce) { .page-particle { animation: none; } }
</style>
