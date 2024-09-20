import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type ErrorCode = '403' | '404';

interface ErrorPageProps {
    errorCode?: ErrorCode;
}

export default function ErrorPage({ errorCode }: ErrorPageProps): JSX.Element {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const back = () => navigate(-1);

    const displayError = (errorCode?: ErrorCode) => {
        switch (errorCode) {
            case '403':
                return {
                    status: '403',
                    title: '403',
                    subTitle: t('Sorry, you are not authorized to access this page.'),
                    extra: (
                        <Button type="primary" onClick={back} disabled>
                            {t('Back')}
                        </Button>
                    )
                };
            default:
                return {
                    status: '404',
                    title: '404',
                    subTitle: t('Sorry, the page you visited does not exist.'),
                    extra: (
                        <Button type="primary" onClick={back} disabled>
                            {t('Back')}
                        </Button>
                    )
                };
        }
    };

    const { status, title, subTitle, extra } = displayError(errorCode);

    return (
        <div>
            <Result status={status as ResultStatusType} title={title} subTitle={subTitle} extra={extra} />
        </div>
    );
}
