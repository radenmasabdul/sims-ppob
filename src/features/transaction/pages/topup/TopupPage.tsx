import AppHeader from "@/components/common/AppHeader"
import { useGetBalanceQuery } from "../../services/transaction.api";
import { useGetProfileQuery } from "@/features/membership/services/profile.api";


export default function TopupPage() {

  const { data: profileData } = useGetProfileQuery();
  const { data: balanceData } = useGetBalanceQuery();

  const profile = profileData?.data;
  const balance = balanceData?.data?.balance ?? 0;

  const fullName = profile
    ? `${profile.first_name} ${profile.last_name}`
    : "Pengguna";

  return (
    <>
      <AppHeader
        fullName={fullName}
        balance={balance}
        profileImage={profile?.profile_image}
      />
    </>
  );
}
