import AppHeader from "@/components/common/AppHeader"
import { useHome } from "@/features/membership/hooks/useHome";

export default function TransactionPage() {
  const { profile, balance, fullName } = useHome();
  
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
