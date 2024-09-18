import { createSlice } from '@reduxjs/toolkit';

export interface AppLanguageState {
    appLanguage: 'pl' | 'en';
}

const initialState: AppLanguageState = {
    appLanguage: 'pl'
};

const appLanguageSlice = createSlice({
    name: 'appLanguage',
    initialState,
    reducers: {
        changeAppLanguage(state, action: { payload: AppLanguageState['appLanguage'] }) {
            if (state.appLanguage === action.payload) return;
            state.appLanguage = action.payload;
        }
    }
});

export const { changeAppLanguage } = appLanguageSlice.actions;
export default appLanguageSlice.reducer;
