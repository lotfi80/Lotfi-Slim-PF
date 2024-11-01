import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../meinPF/Public/Locales/en/translation.json";
import translationDE from "../../meinPF/Public/Locales/de/translation.json";
import translationFR from "../../meinPF/Public/Locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
