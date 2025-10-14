import { AppLanguage } from '../core/constants';
export declare function useLanguage(): {
    currentLanguage: "en" | "es" | "pt" | "fr";
    changeLanguage: (lang: AppLanguage) => void;
    t: import("i18next").TFunction<"translation", undefined>;
};
