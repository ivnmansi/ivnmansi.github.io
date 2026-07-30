<script setup lang="ts">

    import { ref } from 'vue';
    import Card from 'primevue/card';
    import Panel from 'primevue/panel';
    import Badge from 'primevue/badge';
    import Chip from 'primevue/chip';
    import Tag from 'primevue/tag';
    import Button from 'primevue/button';
    import MeterGroup from 'primevue/metergroup';
    import Homeserver from '@/components/Homeserver.vue';
    import LastSong from '@/components/LastsSong.vue';
    import Intro from '@/components/Intro.vue';


    
</script>
<template>
    <div class="grid w-full flex-1 content-center grid-cols-1 gap-4 md:grid-cols-2">

        <div class="flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center gap-4 p-4 text-center md:min-h-0">
            <Intro/>
        </div>
        <div class="flex flex-col items-center gap-4 p-4 justify-center text-center">
            <Homeserver/>

            <LastSong/>
        </div>

        
    </div>
</template>
<style scoped>

</style>
