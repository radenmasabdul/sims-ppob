import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,

    prepareHeaders: (headers) => {
      const stored = localStorage.getItem("auth");

      if (stored) {
        const parsed = JSON.parse(stored);

        headers.set("Authorization", `Bearer ${parsed.token}`);
      }

      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }

      return headers;
    },
  }),

  tagTypes: ["Profile", "Banner", "Service", "Balance", "Transaction", "History"],

  endpoints: () => ({}),
});
