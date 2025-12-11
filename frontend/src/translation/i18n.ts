import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationEN, translationJP } from './locales';

// the translations
const resources = {
  jp: {
    translation: translationJP,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'jp',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
