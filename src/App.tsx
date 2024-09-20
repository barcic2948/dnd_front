import { Route, Routes } from 'react-router-dom';
import MainMenu from './pages/mainMenu/MainMenu';
import RoutesEnum from './types/RoutesEnum';
import ErrorPage from './pages/error/ErrorPage';

export default function App(): JSX.Element {
    //const [_, contextHolder] = notification.useNotification();

    const routes = [
        {
            path: RoutesEnum.MAIN,
            component: <MainMenu />
        },
        {
            path: RoutesEnum.CHARACTERS,
            component: <MainMenu />
        }
    ];

    return (
        <>
            {/*Notification*/}
            <Routes>
                {routes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))}
                <Route path={RoutesEnum.MATCH_ANYTHING} element={<ErrorPage />} />
            </Routes>
        </>
    );
}
