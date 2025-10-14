import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setLanguage, getLanguage } from '../core/helpers';
import { initI18n } from '../core/i18n';
export function useLanguage() {
    const { i18n, t } = useTranslation();
    // Estado local que será seguro para SSR/Cliente
    const [currentLanguage, setCurrentLanguage] = useState('en');
    useEffect(() => {
        // Inicializa i18n solo en cliente
        if (!i18n.isInitialized) {
            initI18n(getLanguage());
        }
        // Sincroniza el estado con el idioma actual de i18n
        setCurrentLanguage(i18n.language);
    }, [i18n]);
    const changeLanguage = (lang) => {
        setLanguage(lang); // guarda cookie
        setCurrentLanguage(lang); // actualiza estado local
        i18n.changeLanguage(lang); // actualiza i18n
    };
    return {
        currentLanguage,
        changeLanguage,
        t,
    };
}
