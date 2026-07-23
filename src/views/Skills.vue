<script setup lang="ts">

const groups = [
    {
        title: 'Frontend',
        icon: 'fa-solid fa-window-maximize',
        items: [
            { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
            { name: 'Nuxt.js', icon: 'fa-solid fa-layer-group' }, { name: 'HTML & CSS', icon: 'fa-brands fa-html5' },
            { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' }
        ]
    },
    {
        title: 'Backend',
        icon: 'fa-solid fa-server',
        items: [{name: 'Django', icon: 'fa-brands fa-python'},{ name: 'Laravel', icon: 'fa-brands fa-laravel' }, { name: 'SQL', icon: 'fa-solid fa-database' }]
    },
    {
        title: 'Programming languages',
        icon: 'fa-solid fa-code',
        items: [
            { name: 'C/C++', icon: 'fa-solid fa-terminal' }, { name: 'Python', icon: 'fa-brands fa-python' }, { name: 'TypeScript', icon: 'fa-brands fa-typescript' },
            { name: 'Julia', icon: 'fa-solid fa-calculator' }, { name: 'Java', icon: 'fa-brands fa-java' }
        ]
    },
    {
        title: 'Game development',
        icon: 'fa-solid fa-gamepad',
        items: [{ name: 'SDL3', icon: 'fa-solid fa-gamepad' }, { name: 'Allegro5', icon: 'fa-solid fa-wand-magic-sparkles' }]
    },
    {
        title: 'Other tools',
        icon: 'fa-solid fa-toolbox',
        items: [
            { name: 'Git', icon: 'fa-brands fa-git-alt' }, { name: 'Docker', icon: 'fa-brands fa-docker' },
            { name: 'Linux', icon: 'fa-brands fa-linux' }, { name: 'Arduino', icon: 'fa-solid fa-microchip' }
        ]
    }
]

const certificates = [
    { title: 'Cisco IT Essentials', description: 'Hardware and software fundamentals', icon: 'fa-solid fa-laptop-code' },
    { title: 'CCNA', description: 'Networking fundamentals', icon: 'fa-solid fa-network-wired' }
]
</script>
<template>

<section class="skills">
    <div class="heading">
        <p class="eyebrow">02 / stack</p>
        <h1 class="section-title">My stack</h1>
        <p class="section-copy">Technologies I use, study, and with which I continue building.</p>
    </div>
    <div class="skill-grid">
        <article v-for="group in groups" :key="group.title" class="glass-panel skill-card"><font-awesome-icon :icon="group.icon" />
            <h2>{{ group.title }}</h2>
            <ul>
                <li v-for="item in group.items" :key="item.name">
                    <span class="skill-name"><font-awesome-icon :icon="item.icon" /> {{ item.name }}</span>
                    <font-awesome-icon class="skill-arrow" icon="fa-solid fa-arrow-up-right-from-square" />
                </li>
            </ul>
        </article>
    </div>
    <section class="certifications" aria-labelledby="certificates-title">
        <div class="heading certificates-heading">
            <p class="eyebrow">03 / certifications</p>
            <h2 id="certificates-title">Certificates</h2>
        </div>
        <div class="certificate-grid">
            <article v-for="certificate in certificates" :key="certificate.title" class="glass-panel certificate-card">
                <font-awesome-icon :icon="certificate.icon" />
                <div>
                    <span>Cisco Networking Academy</span>
                    <h3>{{ certificate.title }}</h3>
                    <p>{{ certificate.description }}</p>
                </div>
                <font-awesome-icon class="certificate-mark" icon="fa-solid fa-certificate" />
            </article>
        </div>
    </section>
</section>
</template>
<style scoped>
.skills { padding: 4rem 0; }
.heading { margin-bottom: 2.5rem; }
.heading .section-title { margin: .7rem 0; max-width: 45rem; }
.skill-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }
.skill-card { padding: 1.5rem; transition: transform .25s ease, border-color .25s ease; }
.skill-card:hover { border-color: rgba(251,93,93,.52); transform: translateY(-5px); }
.skill-card > svg { color: var(--red-400); font-size: 1.1rem; }
.skill-card h2 { font-size: 1.2rem; margin: 1rem 0 1.2rem; }
ul { list-style: none; margin: 0; padding: 0; }
li { border-top: 1px solid var(--line); color: var(--muted); display: flex; font-size: .86rem; justify-content: space-between; padding: .72rem 0; }
.skill-name { align-items: center; display: inline-flex; gap: .55rem; }
.skill-name svg { color: var(--red-400); font-size: .85rem; width: 1rem; }
.skill-arrow { color: var(--red-400); font-size: .65rem; opacity: .6; }
.certifications { margin-top: 5rem; }
.certificates-heading { margin-bottom: 1.2rem; }
.certificates-heading h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 800; letter-spacing: -.05em; margin: .55rem 0 0; }
.certificate-grid { display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr); }
.certificate-card { align-items: center; display: grid; gap: 1rem; grid-template-columns: auto 1fr auto; padding: 1.35rem; transition: transform .25s ease, border-color .25s ease; }
.certificate-card:hover { border-color: rgba(251,93,93,.52); transform: translateY(-4px); }
.certificate-card > svg:first-child { color: var(--red-400); font-size: 1.2rem; }
.certificate-card span { color: var(--red-400); font-family: "JetBrains Mono", monospace; font-size: .65rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.certificate-card h3 { font-size: 1rem; margin: .35rem 0; }
.certificate-card p { color: var(--muted); font-size: .8rem; margin: 0; }
.certificate-mark { color: var(--muted); font-size: 1.1rem; opacity: .42; }
@media(max-width: 767px){.skills{padding:2rem 0}.skill-grid,.certificate-grid{grid-template-columns:1fr;}}
</style>
