import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import './assets/global.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);


const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(PrimeVue, {
    license: import.meta.env.VITE_PRIMEVUE_LICENSE,
    ripple: true,
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
        }
    }
});
app.use(createPinia())
app.use(router)

app.mount('#app')
