import { baseApi } from "@/services/baseApi";
import type { BaseResponse } from "@/types/api";

interface RegisterPayload {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<BaseResponse<null>, RegisterPayload>({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<BaseResponse<LoginResponse>, LoginPayload>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;