import { baseApi } from "@/services/baseApi";
import type { BaseResponse } from "@/types/api";

interface BalanceResponse {
  balance: number;
}

interface TopupPayload {
  top_up_amount: number;
}

interface TransactionPayload {
  service_code: string;
}

interface TransactionResponse {
  invoice_number: string;
  service_code: string;
  total_amount: number;
  status: string;
}

interface HistoryResponse {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

interface HistoryParams {
  limit: number;
  offset: number;
}

interface HistoryData {
  offset: string;
  limit: string;
  records: HistoryResponse[];
}

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<BaseResponse<BalanceResponse>, void>({
      query: () => ({
        url: "/balance",
        method: "GET",
      }),
      providesTags: ["Balance"],
    }),
    topUp: builder.mutation<BaseResponse<BalanceResponse>, TopupPayload>({
      query: (body) => ({
        url: "/topup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Balance", "Transaction"],
    }),
    transaction: builder.mutation<
      BaseResponse<TransactionResponse>,
      TransactionPayload
    >({
      query: (body) => ({
        url: "/transaction",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Balance", "Transaction"],
    }),
    getHistory: builder.query<BaseResponse<HistoryData>, HistoryParams>({
      query: ({ offset, limit }) => ({
        url: "/transaction/history",
        method: "GET",
        params: { offset, limit },
      }),
      providesTags: ["Balance","Transaction", "History"],
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData) => {
        if (!newData.data) return;

        if (!currentCache.data) {
          currentCache.data = newData.data;
          return;
        }

        currentCache.data.records = [
          ...currentCache.data.records,
          ...newData.data.records,
        ];
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.offset !== previousArg?.offset;
      },
    }),
  }),
});

export const { useGetBalanceQuery, useTopUpMutation, useTransactionMutation, useGetHistoryQuery } = transactionApi;
