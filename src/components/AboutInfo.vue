<script setup lang="ts">
</script>
<template>
    <article class="intro-card rounded-2xl border border-surface-700 p-6 md:p-8">
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-surface-0 md:text-4xl minecraft">
            Hi, I'm <span>Ivan!</span>
        </h2>
        <p class="mt-5 max-w-2xl text-base leading-8 text-surface-300 md:text-lg">
            I’m a 4th computer engineering student and hobbyist developer who enjoys turning curiosity into projects. I like learning by building, exploring new technologies, and taking on problems that stretch my skills.
        </p>
        <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag"><v-icon name="fa-file-code"/> Web development</span>
            <span class="tag"><v-icon name="fa-gamepad"/> Game development</span>
            <span class="tag"><v-icon name="fa-code"/> Low level programming</span>
        </div>
    </article>
</template>

<style scoped>
    .intro-card {
        background: linear-gradient(125deg, color-mix(in srgb, var(--p-teal-500) 11%, transparent), color-mix(in srgb, transparent 50%, var(--p-purple-500) 11%)), rgb(2, 2, 2);
    }

    h2 span {
        color: var(--p-teal-300);
    }

    .tag {
        border: 1px solid var(--p-surface-400);
        border-radius: 999px;
        background: transparent;
        color: var(--p-surface-200);
        padding: 0.35rem 0.75rem;
        font-size: 0.85rem;
    }

    .tag:hover {
        border-color: var(--p-teal-500);
        color: var(--p-teal-300);
        transform: translateY(-2px);
    }
</style>
