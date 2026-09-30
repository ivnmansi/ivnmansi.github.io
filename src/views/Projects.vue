<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import PageTitle from "@/components/PageTitle.vue";

const { t, tm } = useI18n();

const projects = computed(() => [
    {
        number: "01",
        title: "JuliaPlots",
        repository: "ivnmansi/juliaplots",
        description: t("projects.items.juliaplots.description"),
        tags: tm("projects.items.juliaplots.tags") as string[],
        accent: "teal",
        image: "https://github.com/ivnmansi/juliaplots/raw/master/demo/demo3D.gif",
        url: "https://community.obsidian.md/plugins/juliaplots",
    },
    {
        number: "02",
        title: "abboShell",
        repository: "ivnmansi/abboShell",
        description: t("projects.items.abboshell.description"),
        tags: tm("projects.items.abboshell.tags") as string[],
        accent: "purple",
        image: "https://github.com/ivnmansi/abboShell/raw/master/docs/image.png",
        url: "https://github.com/ivnmansi/abboShell",
    },
    {
        number: "03",
        title: "KubiBot",
        repository: "ayrtonmo/kubibot",
        description: t("projects.items.kubibot.description"),
        tags: tm("projects.items.kubibot.tags") as string[],
        accent: "teal",
        image: "https://github.com/ayrtonmo/kubibot/blob/main/docs/Fig/diseno_kubi_2.png?raw=true",
        url: "https://github.com/ayrtonmo/kubibot",
    },
    {
        number: "04",
        title: "HOUTOU",
        repository: "ivnmansi/HOUTOU",
        description: t("projects.items.houtou.description"),
        tags: tm("projects.items.houtou.tags") as string[],
        accent: "purple",
        image: "https://img.itch.zone/aW1nLzE3MjkyNTU0LnBuZw==/315x250%23c/iBSnkc.png",
        url: "https://github.com/ivnmansi/HOUTOU",
    },
]);
</script>

<template>
    <section class="projects-page mx-auto flex w-full max-w-6xl flex-col gap-8 px-2 py-6 md:py-12">
        <PageTitle :number="4" :title="t('projects.pageTitle')" />

        <div class="grid gap-5 md:grid-cols-2">
            <article
                v-for="project in projects"
                :key="project.number"
                class="project-card overflow-hidden rounded-2xl border border-surface-700"
            >
                <div class="project-visual" :class="`visual-${project.accent}`">
                    <img
                        v-if="project.image"
                        class="project-image"
                        :src="project.image"
                        :alt="`Preview of ${project.title}`"
                    />
                    <span class="minecraft project-number">{{ project.number }}</span>
                    <span class="minecraft project-status">{{ project.repository }}</span>
                </div>

                <div class="p-6">
                    <h2 class="text-2xl font-bold text-surface-100">{{ project.title }}</h2>
                    <p class="mt-3 leading-7 text-surface-400">{{ project.description }}</p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                    </div>
                    <a
                        class="project-link minecraft mt-6 inline-flex text-sm text-teal-300"
                        :href="project.url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ t("projects.viewRepository") }}
                    </a>
                </div>
            </article>
        </div>

        <a
            class="github-link minecraft mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-surface-700 px-5 py-3 text-sm text-surface-200"
            href="https://github.com/ivnmansi"
            target="_blank"
            rel="noopener noreferrer"
        >
            {{ t("projects.moreBuilds") }}
        </a>
    </section>
</template>

<style scoped>
.project-visual {
    position: relative;
    display: flex;
    min-height: 10rem;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    padding: 1.25rem;
}

.project-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.72;
}

.visual-teal {
    background:
        radial-gradient(circle at 15% 10%, color-mix(in srgb, var(--p-teal-800) 38%, transparent), transparent 44%),
        var(--p-surface-900);
}
.visual-purple {
    background:
        radial-gradient(circle at 85% 10%, color-mix(in srgb, var(--p-purple-400) 38%, transparent), transparent 44%),
        var(--p-surface-900);
}

.project-number,
.project-status {
    position: relative;
    z-index: 1;
}
.project-number {
    color: var(--p-surface-0);
    font-size: 2rem;
}
.project-status {
    border: 1px solid color-mix(in srgb, var(--p-surface-0) 28%, transparent);
    border-radius: 999px;
    background: color-mix(in srgb, var(--p-surface-950) 42%, transparent);
    color: var(--p-surface-100);
    padding: 0.35rem 0.6rem;
    font-size: 0.65rem;
}

.project-tag {
    border: 1px solid var(--p-surface-700);
    border-radius: 999px;
    background: var(--p-surface-800);
    color: var(--p-surface-200);
    padding: 0.4rem 0.75rem;
    font-size: 0.85rem;
}

.project-link:hover {
    color: var(--p-surface-0);
    transform: translateX(3px);
}

.github-link:hover {
    border-color: var(--p-teal-500);
    color: var(--p-teal-300);
    transform: translateY(-2px);
}
</style>
