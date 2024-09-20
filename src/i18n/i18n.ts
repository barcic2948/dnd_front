import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import generalEN from './content/en/generalEN.json';
import generalPL from './content/pl/generalPL.json';

const resources = {
    en: {
        translation: {
            ...generalEN
        }
    },
    pl: {
        translation: {
            ...generalPL
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'eng',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
