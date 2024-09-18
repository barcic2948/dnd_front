import { configureStore } from '@reduxjs/toolkit';
import appLanguageReducer from './AppLanguageSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer: {
        appLanguage: appLanguageReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
