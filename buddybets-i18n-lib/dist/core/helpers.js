import i18n from './i18n';
import { LANG_KEY } from './constants';
import Cookies from 'js-cookie';
export function setLanguage(lang) {
    if (typeof window !== 'undefined') {
        Cookies.set(LANG_KEY, lang, { expires: 365 }); // Cookie dura 1 año
    }
    i18n.changeLanguage(lang);
}
export function getLanguage() {
    if (typeof window !== 'undefined') {
        const lang = Cookies.get(LANG_KEY);
        return (lang || 'en');
    }
    return 'en'; // Valor por defecto durante SSR
}
