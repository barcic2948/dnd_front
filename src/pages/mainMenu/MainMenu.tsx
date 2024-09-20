import { useTranslation } from 'react-i18next';
import classes from './MainMenu.module.scss';
import { Link } from 'react-router-dom';

type ItemsProps = {
    url: string;
    label: string;
};

type SectionProps = {
    type: string;
    items?: ItemsProps[];
}[];

export default function MainMenu(): JSX.Element {
    const { t } = useTranslation();

    const sections: SectionProps = [
        {
            type: t('Characters'),
            items: [
                {
                    url: '#',
                    label: t('Character sheet')
                },
                {
                    url: '#',
                    label: t('Character sheet 2')
                }
            ]
        },
        {
            type: t('Utilities'),
            items: [
                {
                    url: '#',
                    label: t('Rolls')
                },
                {
                    url: '#',
                    label: t('Rolls 2')
                }
            ]
        }
    ];

    return (
        <div className={classes.mainMenu}>
            {sections.map(({ type, items }, index) => (
                <div className={classes.menuCategory} key={index}>
                    <div className={classes.categoryTitle}>
                        <p>{type}</p>
                    </div>
                    {items?.map(({ label, url }, index) => {
                        return (
                            <Link key={index} className={classes.categoryItem} to={url}>
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
