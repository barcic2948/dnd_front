import { createSlice } from '@reduxjs/toolkit';

interface UserProfile {
    username?: string;
    name?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    roles?: string[];
}

interface AuthState {
    user?: UserProfile;
}

const initialState: AuthState = {
    user: undefined
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateProfile(state, action: { payload: AuthState['user'] }) {
            state.user = action.payload;
        }
    }
});

export const { updateProfile } = authSlice.actions;
export default authSlice.reducer;
