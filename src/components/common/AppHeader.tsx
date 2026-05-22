import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Card from "@/components/common/Card";
import foto from "@/assets/foto.png";
import bgSaldo from "@/assets/bg-saldo.png";
import { useHome } from "@/features/membership/hooks/useHome";

export default function AppHeader() {
  const {
    profile,
    balance,
    fullName,
  } = useHome();

  const [showBalance, setShowBalance] = useState<boolean>(false);
  const formattedBalance = `Rp ${balance.toLocaleString("id-ID")}`;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm md:h-24 md:w-24">
          <img
            src={profile?.profile_image?.includes("/null") ? foto : profile?.profile_image || foto}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Selamat datang,</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">
            {fullName}
          </h1>
        </div>
      </div>

      <div className="flex-1">
        <Card
          variant="gradient"
          padding="lg"
          className="relative min-h-35 flex flex-col justify-between bg-none! overflow-hidden"
        >
          <img
            src={bgSaldo}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-red-100">Saldo Anda</p>

              <h2 className="mt-2 text-2xl font-bold tracking-wide text-white md:text-3xl">
                {showBalance ? formattedBalance : "Rp ••••••••"}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowBalance((prev) => !prev)}
              className="-ml-4 mt-6 flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition hover:bg-white/20 cursor-pointer"
            >
              {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}

              <span>{showBalance ? "Sembunyikan Saldo" : "Lihat Saldo"}</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
