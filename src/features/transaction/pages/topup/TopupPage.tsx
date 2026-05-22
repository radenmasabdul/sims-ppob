import AppHeader from "@/components/common/AppHeader";
import { useHome } from "@/features/membership/hooks/useHome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { useTopup } from "../../hooks/useTopup";

export default function TopupPage() {
  const { 
    inputValue,
    handleInputChange,
    error,
    handleTopUp,
    isValid,
    isLoading,
    QUICK_AMOUNTS,
    handleQuickSelect,
    selectedAmount,
    formatRupiah
  } = useTopup();

  const { profile, balance, fullName } = useHome();

  const buttonProsesStyle = `h-12 text-base font-semibold bg-red-500 hover:bg-red-600 text-white cursor-pointer
    disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed`;

  const buttonQuickAmountStyle = `h-12 px-4 text-sm font-medium data-[selected=true]:bg-red-500
    data-[selected=true]:text-white data-[selected=true]:border-red-500 hover:border-red-400 hover:text-red-500 cursor-pointer`;

  return (
    <div className="min-h-screen bg-white">
      <AppHeader
        fullName={fullName}
        balance={balance}
        profileImage={profile?.profile_image}
      />

      <main className="py-10">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-0.5">Silahkan masukan</p>
          <h1 className="text-2xl font-bold text-gray-900">Nominal Top Up</h1>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex flex-1 flex-col gap-3">
            <div className="relative">
              <CreditCard
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <Input
                id="topup"
                name="topup"
                type="text"
                inputMode="numeric"
                placeholder="masukan nominal Top Up"
                value={
                  inputValue
                    ? new Intl.NumberFormat("id-ID").format(
                        parseInt(inputValue),
                      )
                    : ""
                }
                onChange={handleInputChange}
                data-error={!!error}
                className="pl-10 h-12 data-[error=true]:border-red-400 data-[error=true]:focus-visible:ring-red-400"
              />
            </div>

            {error && (
              <p className="text-xs text-red-500 -mt-1 ml-1">{error}</p>
            )}

            <Button
              onClick={handleTopUp}
              disabled={!isValid || isLoading}
              className={buttonProsesStyle}
            >
              {isLoading ? "Memproses..." : "Top Up"}
            </Button>
          </div>

          <div className="grid w-full grid-cols-3 gap-2 md:w-auto md:shrink-0">
            {QUICK_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant="outline"
                onClick={() => handleQuickSelect(amount)}
                data-selected={selectedAmount === amount}
                className={buttonQuickAmountStyle}
              >
                {formatRupiah(amount)}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
