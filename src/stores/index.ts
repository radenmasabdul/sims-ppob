import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "@/stores/alert";
import authReducer from "@/features/membership/stores/auth.store";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;