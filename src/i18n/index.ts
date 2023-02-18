import i18n, { TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en';
import jp from './jp';
import ko from './ko';

i18n
  .use(initReactI18next)
  .init({
    resources: { en, ko, jp },
    lng: window.localStorage.getItem('language') || undefined,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
