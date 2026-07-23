<template>
  <nav class="site-nav">
    <BContainer class="nav-inner">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">&lt;/&gt;</span>
        <span>{{ title }}</span>
      </RouterLink>

      <div class="nav-links">
        <RouterLink to="/">main()</RouterLink>
        <RouterLink to="/about">about()</RouterLink>
        <RouterLink to="/skills">skills()</RouterLink>
        <RouterLink to="/projects">projects()</RouterLink>
      </div>

      <div class="social-links" aria-label="social media">
        <a href="https://github.com/ivnmansi" target="_blank" rel="noreferrer" aria-label="GitHub"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="https://www.linkedin.com/in/ivnmansi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      </div>
    </BContainer>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{ title: string }>()
</script>

<style scoped>
.site-nav { padding: 1.2rem 0; }
.nav-inner { align-items: center; display: flex; gap: 2rem; justify-content: space-between; }
.brand { align-items: center; color: var(--text); display: inline-flex; font-family: "JetBrains Mono", monospace; font-size: 1rem; font-weight: 800; gap: 0.55rem; }
.brand-mark { color: var(--red-400); font-size: 1.15rem; }
.nav-links { display: flex; gap: 1.5rem; font-family: "JetBrains Mono", monospace; }
.nav-links a { color: var(--muted); font-size: 0.9rem; transition: color .2s ease; }
.nav-links a:hover, .nav-links a.router-link-exact-active { color: var(--text); }
.nav-links a.router-link-exact-active::after { background: var(--red-400); border-radius: 1rem; content: ''; display: block; height: 2px; margin-top: .38rem; width: 1rem; }
.social-links { display: flex; gap: .85rem; }
.social-links a { align-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--muted); display: grid; height: 2.25rem; place-items: center; transition: all .2s ease; width: 2.25rem; }
.social-links a:hover { border-color: var(--red-400); color: var(--red-400); transform: translateY(-2px); }
@media (max-width: 575px) { .nav-inner { gap: 1rem; } .nav-links { display: none; } }
</style>
