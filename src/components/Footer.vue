<script setup lang="ts">
import Button from "primevue/button";
import Popover from "primevue/popover";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const seeMirrors = ref();

const toggleMirrors = (event: Event) => {
    seeMirrors.value.toggle(event);
};

const hideMirrors = () => {
    seeMirrors.value.hide();
};

const mirrors = ["http://ivnmansi.xyz", "http://ivnmansi.github.io", "http://hain.umag.cl/~ivnmansi"];
</script>
<template>
    <footer class="footer border-t border-surface-800 bg-surface-950 p-4 text-center text-sm text-surface-800">
        <Popover ref="seeMirrors">
            <div class="p-2 text-sm text-surface-600 underline">
                <ul>
                    <li v-for="mirror in mirrors" :key="mirror">
                        <a :href="mirror" target="_blank" rel="noopener noreferrer" @click="hideMirrors">{{
                            mirror
                        }}</a>
                    </li>
                </ul>
            </div>
        </Popover>

        <p>
            {{ t("footer.madeWith") }}
            <span class="text-primary"> <v-icon name="fa-vuejs" animation="pulse" /> Vue.js</span>
            |
            <Button :label="t('footer.mirrors')" severity="secondary" text class="p-button-sm" @click="toggleMirrors" />
        </p>
    </footer>
</template>
