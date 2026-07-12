<script setup lang="ts">
import OutlineBadge from '@/components/OutlineBadge.vue'
</script>

<template>
<section class="about">
    <div>
        <p class="eyebrow">01 / About me</p>
        <h1 class="section-title">A little about me</h1>
        <p class="section-copy">I am a 4th-year Computer Engineering student based in Chile. I am passionate about programming and technology, specially low-level programming, game development and open source software. </p>

        <p class="section-copy">I am always looking for new challenges and opportunities to learn new things and grow as a developer :)</p>
        <div class="personal-badges">
            <OutlineBadge><font-awesome-icon icon="fa-solid fa-user" /> he/him</OutlineBadge>
            <OutlineBadge><font-awesome-icon icon="fa-solid fa-cake-candles" /> 21 years old</OutlineBadge>
        </div>
    </div>
    <div class="glass-panel notes">
        <div>
            <span>Right now</span>
            <h2>Learning by building</h2>
            <p>I am deepening my software skills and turning what I learn into projects of my own.</p>
        </div>
        <div>
            <span>Off-screen</span>
            <h2>Games, Linux & curiosity</h2>
            <p>I enjoy games, open source software and learning how things work under the hood.</p>
        </div>
    </div>
</section>
</template>
<style scoped>
.about {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
    min-height: 70vh;
    padding: 5rem 0;
}
.section-title { margin: .75rem 0 1.5rem; }

.personal-badges {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
    margin-top: 1.5rem;
}

.notes { align-self: start; padding: .5rem 1.5rem; }
.notes > div { border-bottom: 1px solid var(--line); padding: 1.4rem 0; }
.notes > div:last-child { border: 0; }
.notes span { color: var(--red-400); font-family: "JetBrains Mono", monospace; font-size: .72rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.notes h2 { font-size: 1.1rem; margin: .5rem 0; }
.notes p { color: var(--muted); font-size: .9rem; line-height: 1.65; margin: 0; }

@media(max-width: 767px){
    .about{
        grid-template-columns:1fr;
        padding:2rem 0;
    }
}
</style>
