import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../shared/types/auth';

interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>,
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
