import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';
import AppConfigProvider from './AppConfigProvider.tsx';
import { Provider } from 'react-redux';
import Auth from './pages/auth/Auth.tsx';
import './i18n/i18n.ts';
import './index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppConfigProvider>
                    <App />
                </AppConfigProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
