import { useGetBalanceQuery } from "@/features/transaction/services/transaction.api";
import { useGetProfileQuery } from "../services/profile.api";
import { useGetBannerQuery, useGetServicesQuery } from "@/features/information/services/information.api";
import { SERVICE_BG_COLORS } from "../types";

export function useHome() {
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  const { data: balanceData, isLoading: balanceLoading } = useGetBalanceQuery();
  const { data: bannerData, isLoading: bannerLoading } = useGetBannerQuery();
  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery();

  const profile = profileData?.data;
  const balance = balanceData?.data?.balance ?? 0;
  const banners = bannerData?.data ?? [];
  const services = servicesData?.data ?? [];

  const isLoading = profileLoading || balanceLoading || bannerLoading || servicesLoading;

  const fullName = profile ? `${profile.first_name} ${profile.last_name}` : "Pengguna";

  return {
    profile,
    balance,
    banners,
    services,
    isLoading,
    fullName,
    SERVICE_BG_COLORS,
  };
}
