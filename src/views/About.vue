<script setup lang="ts">
    import MinecraftSkin from '@/components/MinecraftSkin.vue';
    import AboutInfo from '@/components/AboutInfo.vue';
    import PageTitle from '@/components/PageTitle.vue';
    import Button from 'primevue/button';
    import ArrowRight from '@primeicons/vue/arrow-right';
</script>
<template>
    <section class="about-page mx-auto flex w-full max-w-6xl flex-col gap-8 px-2 py-6 md:py-12">
        <PageTitle :number='1' title="About Me"/>

        <div class="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.5fr]">
            <aside class="profile-card flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-surface-700 p-6 text-center">
                <div class="skin-frame relative mb-5">
                    <MinecraftSkin class="minecraft-skin"/>
                </div>
            </aside>

            <div class="flex flex-col gap-6">
                <AboutInfo/>

                <div class="grid gap-4 sm:grid-cols-2">
                    <article class="info-card">
                        <span class="minecraft text-sm text-teal-300">// CURRENT FOCUS</span>
                        <h3>Learning new things</h3>
                        <p>Exploring new technologies and programming languages to expand my skill set</p>
                    </article>

                    <article class="info-card">
                        <span class="minecraft text-sm text-purple-300">// OPEN TO</span>
                        <h3>Collaboration</h3>
                        <p>Looking for opportunities to learn and work with others on interesting projects</p>
                    </article>
                </div>
            </div>
        </div>

        <div class="mt-2 flex justify-end">
            <router-link to="/skills">
                <Button severity="help" class="next-page-button">
                    View skills <ArrowRight />
                </Button>
            </router-link>
        </div>
    </section>
</template>

<style scoped>

    .minecraft-skin {
        cursor: crosshair;
        filter: drop-shadow(0 8px 12px VAR(--p-surface-800));
    }
    .info-card {
        border: 1px solid var(--p-surface-700);
        border-radius: 0.8rem;
        background: color-mix(in srgb, var(--p-surface-950) 58%, transparent);
        padding: 1rem;
    }


    .info-card h3 {
        margin: 0.75rem 0 0.5rem;
        color: var(--p-surface-0);
        font-size: 1.1rem;
        font-weight: 700;
    }

    .info-card p {
        color: var(--p-surface-400);
        font-size: 0.9rem;
        line-height: 1.6;
    }

</style>
