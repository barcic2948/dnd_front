import plPL from 'antd/locale/pl_PL';
import enGB from 'antd/locale/en_GB';

import { useTranslation } from 'react-i18next';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ConfigProvider, Empty } from 'antd';
import { RootState } from './store';

const localeMapping = {
    pl: plPL,
    en: enGB
};

const themeValues = {
    appPrimaryColor: getComputedStyle(document.documentElement).getPropertyValue('--app-primary-color'),
    appBorderRadious: getComputedStyle(document.documentElement).getPropertyValue('--border-radious'),
    appBorderRadiousButton: getComputedStyle(document.documentElement).getPropertyValue('--border-radious-button')
};

interface AppConfigProviderProps {
    children: ReactNode;
}

export default function AppConfigProvider({ children }: AppConfigProviderProps): JSX.Element {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { appLanguage } = useSelector((state: RootState) => state.appLanguage);

    //const changeLanguage = async () => {
    //    await i18next.changeLanguage(appLanguage);
    //};

    dayjs.extend(relativeTime);
    dayjs.locale(appLanguage);

    useEffect(() => {
        //changeLanguage();
        //dispatch(setShouldRefreshTable(true));
        // esling-disable-next-line react-hooks/exhaustive-deps
    }, [appLanguage]);

    return (
        <ConfigProvider
            locale={localeMapping[appLanguage]}
            theme={{
                hashed: false,
                token: {
                    colorPrimary: themeValues.appPrimaryColor,
                    borderRadius: parseInt(themeValues.appBorderRadious)
                },
                components: {
                    Button: {
                        colorPrimary: themeValues.appPrimaryColor,
                        defaultBorderColor: themeValues.appPrimaryColor,
                        defaultColor: themeValues.appPrimaryColor,
                        borderRadius: parseInt(themeValues.appBorderRadiousButton)
                    },
                    Tabs: {
                        itemActiveColor: themeValues.appPrimaryColor
                    }
                }
            }}
            renderEmpty={() => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('No data')} />}
        >
            {children}
        </ConfigProvider>
    );
}
