import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "@/stores/alert";
import authReducer from "@/features/membership/stores/auth.store";
import informationReducer from "@/features/information/stores/information.store";
import transactionReducer from "@/features/transaction/stores/transaction.store";
import { baseApi } from "@/services/baseApi";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    information: informationReducer,
    transaction: transactionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;