import { baseApi } from "@/services/baseApi";
import type { BaseResponse } from "@/types/api";

interface BannerResponse {
  banner_name: string;
  banner_image: string;
  description: string;
}

interface ServiceResponse {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
}

export const informationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query<BaseResponse<BannerResponse[]>, void>({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
      providesTags: ["Banner"],
    }),
    getServices: builder.query<BaseResponse<ServiceResponse[]>, void>({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["Service"],
    })
  })
});

export const { useGetBannerQuery, useGetServicesQuery } = informationApi;