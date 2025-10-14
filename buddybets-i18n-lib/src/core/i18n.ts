// core/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from './helpers';
import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import fr from '../locales/fr.json';

// Función de inicialización que puede ser llamada tanto en cliente como servidor
export const initI18n = (initialLang?: string) => {
  const lng = initialLang || getLanguage();

  if (!i18n.isInitialized) {
    i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: en },
          es: { translation: es },
          pt: { translation: pt },
          fr: { translation: fr },
        },
        lng,
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      });
  } else {
    i18n.changeLanguage(lng);
  }

  return i18n;
};

export default i18n;
