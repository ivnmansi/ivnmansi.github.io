<script setup lang="ts">
    defineProps<{
        number: number;
        title: string;
    }>();
</script>

<template>
    <div class="w-full max-w-md justify-left text-left flex flex-row items-center gap-4">
            <h2 class="page-title">
                <small>{{ number }}. </small>
                 {{ title }}
            </h2>
        </div>

</template>

<style lang="css" scoped>
    .page-title {
    font-family: 'Minecraft', monospace;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(to right, var(--p-teal-400), var(--p-purple-400), var(--p-pink-400), var(--p-orange-400), var(--p-yellow-400));
    background-size: 400% 400%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-text 4s infinite;
    text-decoration: underline 5px rgba(0, 0, 0, 0.3);
    padding-bottom: 0.5rem;
}
.page-title small {
    opacity: 0.5;
}

.page-title:hover{
    letter-spacing: 0.1em;
}

</style>