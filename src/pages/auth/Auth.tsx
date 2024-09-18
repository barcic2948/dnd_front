import { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../../api/apiAuthentication';
import { updateProfile } from '../../store/AuthSlice';
import { AxiosError } from 'axios';
import { Spin } from 'antd';

interface AuthProps {
    children: ReactNode;
}

export default function Auth({ children }: AuthProps): JSX.Element {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const getProfileOrRedirect = async () => {
        try {
            const response = await getUserProfile();
            dispatch(updateProfile(response));
            setLoading(false);
        } catch (error) {
            if (error instanceof AxiosError) {
                const status = error.response?.status;

                if (status === 401) {
                    window.location.href = import.meta.env.VITE_APP_LOGIN_PAGE;
                }
            }
        }
    };

    useEffect(() => {
        getProfileOrRedirect();

        const auth = setInterval(() => {
            getProfileOrRedirect();
        }, 60_000 * 5);

        return () => clearInterval(auth);
    }, []);

    return <>{!loading ? children : <Spin />}</>;
}
