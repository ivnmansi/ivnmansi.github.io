<script setup lang="ts">
    import Chip from 'primevue/chip';
    import Button from 'primevue/button';
    import Github from '@primeicons/vue/github';
    import ArrowRight from '@primeicons/vue/arrow-right';
</script>
<template>


    <h1 class="text-6xl font-bold minecraft mt-0 md:mt-5">Ivan Mansilla</h1>
            
    <div class="gap-2 flex">
        <Chip label="🛠️ Full Stack Developer" class="bg-primary text-surface-950 font-bold text-lg hover-chip" />
        <Chip label="🐧 Linux Enthusiast" class="bg-primary text-surface-950 font-bold text-lg hover-chip" />
    </div>

    <p>4th year Computer Engineering Student based in Chile</p>


    <div class="flex flex-row gap-4 mt-4 intro-buttons">
        <router-link to="/about">
            <Button severity="help" variant="outlined" class="mt-4 hover-button">
                <ArrowRight/> About Me
            </Button>
        </router-link>


        <Button  severity="secondary" variant="outlined" class="mt-4 hover-button" as="a" href="https://github.com/ivnmansi" target="_blank" rel="noopener noreferrer">
            <Github/> Github
        </Button>

    </div>


         
</template>
<style scoped>
    h1 {
        background: linear-gradient(to right, var(--p-teal-400), var(--p-purple-400), var(--p-pink-400), var(--p-orange-400), var(--p-yellow-400));
        background-size: 400% 400%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow-text 4s infinite;
        cursor: pointer;
        text-shadow: 0 0 80px rgba(255, 255, 255, 0.4);
    }
    h1:hover {
        transform: scale(1.1);
    }
    
    .floating-mew {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes rainbow-text {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

</style>