<script setup lang="ts">
    import Panel from 'primevue/panel';
    import Tag from 'primevue/tag';
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    import type { LastSong } from '@/services/lastSongService';
    import { getLastSong } from '@/composables/getLastSong';

    import Card from 'primevue/card';
    import Chip from 'primevue/chip';
    
    const lastSong = ref<LastSong>({
        nowPlaying: false,
        date: null,
        album: '',
        artist: '',
        image: '',
        name: '',
        url: ''
    });

    onMounted(async () => {
        lastSong.value = await getLastSong();
    });

</script>
<template>
    <Panel class="w-full max-w-md hover-panel">
        <template #header>
            <h2 class="">Last played song <Tag severity="danger">last.fm</Tag></h2>
        </template>

        <div class="grid grid-cols-2 gap-3 justify-center text-center">
            <img :src="lastSong.image"class="w-40 h-auto rounded-lg mr-2" />

            <div class="text-left flex flex-col gap-1 text-align-center">

                <Chip v-if ="lastSong.nowPlaying" label="Now Playing" class="bg-success text-surface-950 font-bold text-sm mb-2 w-full now-playing" />
                
                <Chip v-else :label="'Last Played on ' + lastSong.date" class="bg-surface-700 text-surface-200 font-bold text-sm mb-2 w-full" />

                <p class="text-sm text-surface-500"> <a :href="lastSong.url" target="_blank" rel="noopener noreferrer" class="text-surface-200">{{ lastSong.name }}</a> - {{ lastSong.artist }}</p>
            </div>
        </div>
    </Panel>
</template>

<style scoped>
.now-playing::before {
    content: "●";
    color: var(--p-green-300);
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.5) translateY(-5%);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>