<script setup lang="ts">
import Button from "primevue/button";
import { computed } from "vue";
import CountryFlag from "vue-country-flag-next";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const flagCountry = computed(() => {
    return locale.value === "es" ? "es" : "us";
});

function toggleLanguage() {
    const nextLocale = locale.value === "es" ? "en" : "es";
    locale.value = nextLocale;
    localStorage.setItem("locale", nextLocale);
}
</script>

<template>
    <Button
        severity="secondary"
        variant="outlined"
        class="lang-btn flex items-center gap-2"
        @click="toggleLanguage"
        :aria-label="locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'"
        :title="locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'"
    >
        <!-- Marco rectangular proporcionado (25x16px) que mantiene proporción horizontal y efecto glitch -->
        <div class="glitch-flag-wrapper">
            <CountryFlag :country="flagCountry" size="normal" />
        </div>
        <span class="minecraft text-xs uppercase font-bold">{{ locale }}</span>
    </Button>
</template>

<style scoped>
.lang-btn {
    transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s !important;
    padding: 0.25rem 0.65rem;
}

.lang-btn:hover {
    transform: translateY(-2px);
    border-color: var(--p-teal-900) !important;
    color: var(--p-teal-400) !important;
}

/* Marco rectangular estándar para banderas (proporción ~1.5) */
.glitch-flag-wrapper {
    position: relative;
    width: 25px;
    height: 16px;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* Evitamos que flexbox aplaste el ancho del sprite y mantenemos la transición glitch */
:deep(.flag) {
    width: 52px !important;
    height: 39px !important;
    min-width: 52px !important;
    max-width: 52px !important;
    min-height: 39px !important;
    max-height: 39px !important;
    flex-shrink: 0 !important;
    margin: 0 !important;
    transform: scale(0.48) !important;
    transform-origin: center center !important;
    transition: background-position 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}
</style>
