<script setup lang="ts">
    import { ref } from 'vue';
    import Popover from 'primevue/popover';
    import Button from 'primevue/button';

    const seeMirrors = ref();

    const toggleMirrors = (event: Event) => {
        seeMirrors.value.toggle(event);
    };

    const hideMirrors = () => {
        seeMirrors.value.hide();
    };

    const mirrors = [
        'http://ivnmansi.xyz',
        'http://ivnmansi.github.io',
    ]

</script>
<template>
    <footer class="footer border-t border-surface-800 bg-surface-950 p-4 text-center text-sm text-surface-800">
        <Popover
            ref="seeMirrors"
        >
            <div class="p-2 text-sm text-surface-600 underline">
                <ul>
                    <li v-for="mirror in mirrors" :key="mirror">
                        <a :href="mirror" target="_blank" rel="noopener noreferrer" @click="hideMirrors">{{ mirror }}</a>
                    </li>
                </ul>
            </div>
        </Popover>

        <p>Made with <span class="text-primary"> <v-icon name="fa-vuejs" animation="pulse" /> Vue.js</span>
        | 
        <Button label="Mirrors" severity="secondary" text class="p-button-sm" @click="toggleMirrors" />
        </p>

    </footer>
</template>