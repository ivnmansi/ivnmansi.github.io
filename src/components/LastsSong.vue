<script setup lang="ts">
    import Panel from 'primevue/panel';
    import Tag from 'primevue/tag';
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    import type { LastSong } from '@/services/lastSongService';
    import { getLastSong } from '@/composables/getLastSong';

    import Card from 'primevue/card';
    import Chip from 'primevue/chip';
    import Button from 'primevue/button';

    import Skeleton from 'primevue/skeleton';
    
    const lastSong = ref<LastSong | null>(null);

    onMounted(async () => {
        lastSong.value = await getLastSong();
    });

</script>
<template>
    <Panel class="w-full max-w-md hover-panel">
        <template #header>
            <h2 class=""><v-icon name="fa-music" class="mr-2" />Last played song <Tag severity="danger">last.fm</Tag></h2>
        </template>

        <template #footer>
            <div class="flex flex-wrap items-center justify-between gap-4">
                <span class="text-surface-500 text-surface-600 text-sm">API used: biancarosa/lastfm-last-played</span>
                <div class="flex items-center gap-2">
                    <Button severity="secondary" rounded as="a" href="https://github.com/biancarosa/lastfm-last-played" target="_blank" rel="noopener noreferrer">
                        <v-icon name="fa-external-link-alt" />
                    </Button>
                </div>
            </div>
            </template>

        <div v-if="lastSong != null" class="grid grid-cols-2 gap-3 justify-center text-center" >
            
            <img v-if="lastSong.image!=''" :src="lastSong.image"class="w-40 h-auto rounded-lg mr-2" />
            <Skeleton v-else class="rounded-lg mr-2 w-40 h-40" />

            <div class="text-left flex flex-col gap-1 text-align-center">

                <Chip v-if ="lastSong.nowPlaying" label="Now Playing" class="bg-success text-surface-950 font-bold text-sm mb-2 w-full now-playing" />
                    
                <Chip v-else :label="'Last Played on ' + lastSong.date" class="bg-surface-700 text-surface-200 font-bold text-sm mb-2 w-full" />
                
                <div>
                <p class="text-surface-200"> <a :href="lastSong.url" target="_blank" rel="noopener noreferrer">{{ lastSong.name }}</a></p>

                <p class="text-sm text-surface-500">{{ lastSong.artist }}</p>
                </div>
            </div>
        </div>
        <div v-else class="grid grid-cols-2 gap-3 justify-center text-center" >
            <Skeleton width="160px" height="160px" class="rounded-lg mr-2" />
            <div class="text-left flex flex-col gap-1 text-align-center">
                <Skeleton width="100%" height="30px" class="mb-2" />
                <Skeleton width="100%" height="20px" />
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