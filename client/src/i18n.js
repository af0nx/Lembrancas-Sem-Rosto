// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(LanguageDetector) // usa o detector de idioma
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator'], // detecta o idioma baseado no navegador
      caches: ['localStorage', 'cookie'] // opcional, para armazenar o idioma selecionado
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
