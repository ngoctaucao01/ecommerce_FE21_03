import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi",
    caches: ['localStorage', 'cookie'],
    keySeparator: '.', // messages.welcome
    whitelist: ['en', 'vi'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
