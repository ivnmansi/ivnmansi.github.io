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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-25 md:mt-0 mb-20 md:mb-0">

        <div class="flex flex-col items-center gap-4 p-4 justify-center text-center mb-25 md:mb-0">
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
