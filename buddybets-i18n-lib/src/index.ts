// buddybets-i18n-lib/src/index.ts

// Reexporta lo que necesitas fuera de la librería
export { initI18n } from './core/i18n';
export { default as i18n } from './core/i18n';
export { useLanguage } from './hooks/useLanguage';
export { getLanguage, setLanguage } from './core/helpers';
export { AppLanguage } from './core/constants';
export { I18nextProvider } from 'react-i18next';