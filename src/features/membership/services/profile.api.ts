import { baseApi } from "@/services/baseApi";
import type { BaseResponse } from "@/types/api";

interface ProfileResponse {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}

interface ProfilePayload {
  first_name: string;
  last_name: string;
}

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<BaseResponse<ProfileResponse>, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation<BaseResponse<ProfileResponse>, ProfilePayload>({
      query: (body) => ({
        url: "/profile/update",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    updateProfileImage: builder.mutation<BaseResponse<ProfileResponse>, FormData>({
      query: (body) => ({
        url: "/profile/image",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useUpdateProfileImageMutation } = profileApi;