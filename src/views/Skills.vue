<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import Button from 'primevue/button';
import ArrowRight from '@primeicons/vue/arrow-right';


const skillGroups = [
    {
        label: '01 // PROGRAMMING',
        colorClass: 'text-teal-200',
        skills: [
            { name: 'C', icon: 'vi-file-type-c' },
            { name: 'C++', icon: 'vi-file-type-cpp' },
            { name: 'Python', icon: 'vi-file-type-python' },
            { name: 'TypeScript', icon: 'vi-file-type-typescript-official' },
            { name: 'Java', icon: 'vi-file-type-java' },
            { name: 'Julia', icon: 'vi-file-type-julia' },
            { name: 'C#', icon: 'vi-file-type-csharp' }
        ],
    },
    {
        label: '02 // FRONTEND',
        colorClass: 'text-purple-300',
        skills: [
            { name: 'Vue.js', icon: 'vi-file-type-vue' },
            { name: 'Tailwind CSS', icon: 'vi-file-type-tailwind' },
            { name: 'Bootstrap', icon: 'fa-bootstrap' },
            { name: 'Vite', icon: 'vi-file-type-vite' },
            { name: 'Nuxt.js', icon: 'vi-file-type-nuxt' }
        ],
    },
    {
        label: '03 // BACKEND',
        colorClass: 'text-pink-300',
        skills: [
            { name: 'Laravel', icon: 'fa-laravel' },
            { name: 'Django', icon: 'vi-file-type-django' },
            { name: 'ASP.NET', icon: 'co-dot-net'}

        ],
    },
    {
        label: '04 // DEVOPS',
        colorClass: 'text-orange-300',
        skills: [
            { name: 'Docker', icon: 'vi-file-type-docker' },
            { name: 'Linux', icon: 'vi-folder-type-linux' },
            { name: 'Git', icon: 'vi-file-type-git' },
            { name: 'Proxmox', icon: 'co-proxmox' },
            { name: 'Nginx', icon: 'vi-file-type-nginx' }
            
        ],
    },
    {
        label: '05 // OTHER TOOLS',
        colorClass: 'text-yellow-200',
        skills: [
            { name: 'Vim', icon: 'vi-file-type-vim' },
            { name: 'Makefile', icon: 'vi-file-type-makefile' },
            { name: 'LaTeX', icon: 'vi-file-type-tex' },
            { name: 'VS Code', icon: 'vi-file-type-vscode' },
            { name: 'Postman', icon: 'co-postman' },
            { name: 'Arduino', icon: 'vi-file-type-arduino' }
        ],            
    }
];

const certificates = [
    {
        title: 'IT Essentials 7',
        issuer: 'Cisco Networking Academy',
        code: '01',
        url: 'https://www.credly.com/badges/4f500d6e-b2dd-438f-aca9-6b13bf33f251',
    },
    {
        title: 'CCNA',
        issuer: 'Cisco Networking Academy',
        code: '02',
        url: 'https://www.credly.com/badges/ca80fa54-9ee4-4eca-ac7b-8217a30f39ec',
    },
];
</script>

<template>
    <section class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-2 py-6 md:py-12">
        <PageTitle :number="2" title="Skills" />

        <div class="intro-card rounded-2xl border border-surface-700 p-6 md:p-8">
            <span class="minecraft text-purple-400 text-2xl">TOOLKIT</span>
            <p class="mt-4 max-w-2xl leading-7 text-surface-300">
                Set of technologies and skills I have been learning, in college and through personal projects. I enjoy exploring new tools and frameworks, and I am always looking to expand my skill set.
            </p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
            <article v-for="group in skillGroups" :key="group.label" class="skill-card rounded-2xl border border-surface-700 p-5">
                <span class="minecraft text-sm" :class="group.colorClass">{{ group.label }}</span>
                <div class="mt-5 flex flex-wrap gap-2">
                    <span v-for="skill in group.skills" class="skill-tag">
                        <v-icon :name="skill.icon" class="mr-2" />{{ skill.name }}
                    </span>
                </div>
            </article>
        </div>

        <div class="mt-4 flex items-center gap-4">
            <span class="minecraft text-3xl text-surface-600">3.</span>
            <div class="h-px flex-1 bg-surface-700"></div>
            <h2 class="minecraft text-2xl text-surface-100">Certificates</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
            <article v-for="certificate in certificates" :key="certificate.title" class="certificate-card rounded-2xl border border-surface-700 p-6">
                <div class="flex items-start justify-between gap-4">
                    <span class="minecraft text-lg text-purple-300">{{ certificate.code }}.</span>
                    <span class="certificate-badge minecraft">CERTIFIED</span>
                </div>
                <h3 class="mt-8 text-xl font-bold text-surface-100">{{ certificate.title }}</h3>
                <p class="mt-2 text-surface-400">{{ certificate.issuer }}</p>
                <div class="mt-6 flex justify-end">
                    <a class="certificate-link minecraft text-sm text-purple-300" :href="certificate.url" target="_blank" rel="noopener noreferrer">
                        VIEW CREDENTIAL ↗
                    </a>
                </div>
            </article>
        </div>

        <div class="mt-2 flex justify-end">
            <router-link to="/projects">
                <Button severity="help" class="next-page-button">
                    View projects <ArrowRight />
                </Button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>
.intro-card {
    background: linear-gradient(125deg, color-mix(in srgb, var(--p-purple-500) 11%, transparent), transparent 50%), var(--p-surface-950);
}

.skill-card {
    background: var(--p-surface-900);
}

.skill-card:hover {
    border-color: var(--p-teal-600);
    transform: translateY(-3px);
}

.skill-tag {
    border: 1px solid var(--p-surface-700);
    border-radius: 999px;
    background: var(--p-surface-800);
    color: var(--p-surface-200);
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
}

.skill-tag:hover {
    border-color: var(--p-teal-500);
    color: var(--p-teal-300);
}

.certificate-card {
    background: radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--p-purple-500) 12%, transparent), transparent 52%), var(--p-surface-950);
}

.certificate-card:hover {
    border-color: var(--p-purple-500);
    transform: translateY(-3px);
}

.certificate-badge {
    border: 1px solid color-mix(in srgb, var(--p-purple-400) 50%, var(--p-surface-700));
    border-radius: 999px;
    color: var(--p-purple-300);
    padding: 0.3rem 0.55rem;
    font-size: 0.65rem;
}

.certificate-link:hover {
    color: var(--p-surface-0);
    transform: translateX(3px);
}
</style>
