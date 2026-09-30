import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";

const savedLocale = localStorage.getItem("locale") || "en";

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: "en",
    messages: {
        es,
        en,
    },
});

export default i18n;
