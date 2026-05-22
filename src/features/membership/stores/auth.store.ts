import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  isHydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state) => {
      state.isHydrated = true;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isHydrated = true;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.token,
        }),
      );
    },
    hydrateAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isHydrated = true;
    },
    finishHydration: (state) => {
      state.isHydrated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { registerSuccess, loginSuccess, hydrateAuth, finishHydration, logout } = authSlice.actions;

export default authSlice.reducer;
