<script setup lang="ts">
import OutlineBadge from './OutlineBadge.vue'

defineProps<{
  name: string
  description: string
  link: string
  technologies: string[]
}>()
</script>

<template>
  <article class="glass-panel project-card">
    <div class="card-topline">
      <a :href="link" target="_blank" rel="noopener noreferrer" :aria-label="`View ${name} on GitHub`">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </div>

    <h2 style="color:var(--red-500);font-weight:bold">{{ name }} </h2>
    <p>{{ description }}</p>

    <div class="project-technologies" aria-label="Technologies used">
      <OutlineBadge v-for="technology in technologies" :key="technology">{{ technology }}</OutlineBadge>
    </div>
  </article>
</template>

<style scoped>
.project-card { display: flex; flex-direction: column; min-height: 15rem; padding: 1.5rem; transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease; }
.project-card:hover { border-color: rgba(251, 93, 93, .55); box-shadow: 0 24px 50px rgba(0, 0, 0, .24); transform: translateY(-5px); }
.card-topline { align-items: center; display: flex; justify-content: space-between; }
.project-label { color: var(--red-400); font-family: "JetBrains Mono", monospace; font-size: .66rem; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }
.project-label svg { margin-right: .35rem; }
.card-topline > a { align-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--muted); display: grid; height: 2rem; place-items: center; transition: all .2s ease; width: 2rem; }
.card-topline > a:hover { border-color: var(--red-400); color: var(--red-400); transform: rotate(8deg); }
h2 { font-size: 1.35rem; letter-spacing: -.03em; margin: 1.35rem 0 .6rem; }
p { color: var(--muted); font-size: .9rem; line-height: 1.65; margin: 0; }
.project-technologies { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: auto; padding-top: 1.5rem; }
.project-technologies :deep(.outline-badge) { font-size: .72rem; padding: .38rem .62rem; }
</style>
