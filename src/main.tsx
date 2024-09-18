import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';
import AppConfigProvider from './AppConfigProvider.tsx';
import { Provider } from 'react-redux';
import Auth from './pages/auth/Auth.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppConfigProvider>
                    <Auth>
                        <App />
                    </Auth>
                </AppConfigProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
