import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TransactionHistory {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

interface TransactionState {
  balance: number;
  history: TransactionHistory[];
}

const initialState: TransactionState = {
  balance: 0,
  history: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    setHistory: (state, action: PayloadAction<TransactionHistory[]>) => {
      state.history = action.payload;
    },
    clearTransaction: (state) => {
      state.balance = 0;
      state.history = [];
    },
  },
});

export const { setBalance, setHistory, clearTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
