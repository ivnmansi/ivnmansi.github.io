<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    name: 'JuliaPlots',
    description: 'An Obsidian plugin for plotting mathematical functions with Julia and Plots.jl.',
    link: 'https://github.com/ivnmansi/juliaplots',
    technologies: ['Obsidian', 'TypeScript', 'Julia', 'Plots.jl'],
  },
  {
    name: 'HOUTOU',
    description: 'A game made exclusively in C with the Allegro5 library for a university project.',
    link: 'https://github.com/ivnmansi/houtou',
    technologies: ['C', 'Allegro5', 'Game development'],
  },
  {
    name: 'Kubibot',
    description: 'A companion-robot prototype with AI capabilities and speech recognition.',
    link: 'https://github.com/ayrtonmo/kubibot',
    technologies: ['Raspberry Pi', 'Arduino', 'Python', 'C++', 'Robotics'],
  },
  {
    name: 'AbboSH',
    description: 'A simple shell written in C as a personal project to learn about operating systems and processes.',
    link: 'https://github.com/ivnmansi/abbosh',
    technologies: ['C', 'POSIX', 'Operating Systems'],
  }
]
</script>

<template>
  <section class="projects">
    <div class="heading">
      <p class="eyebrow">04 / projects</p>
      <h1 class="section-title">Things I've built.</h1>
      <p class="section-copy">A selection of personal and university projects where I explore software, games and hardware.</p>
    </div>

    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>

  </section>
</template>

<style scoped>
.projects { padding: 4rem 0; }
.heading { margin-bottom: 2.5rem; }
.heading .section-title { margin: .7rem 0; max-width: 45rem; }
.project-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }

@media (max-width: 991px) { .project-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px) { .projects { padding: 2rem 0; }.project-grid { grid-template-columns: 1fr; } }
</style>
