import AppHeader from "@/components/common/AppHeader";
import { usePayment } from "@/features/transaction/hooks/usePayment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default function PaymentPage() {
  const { profile, balance, fullName, service, isLoading, handlePay, formatRupiah } = usePayment();

  if (!service) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Service tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <AppHeader
          fullName={fullName}
          balance={balance}
          profileImage={profile?.profile_image}
        />

        <div className="mt-10">
          <p className="text-sm text-gray-500 mb-3">Pembayaran</p>

          <div className="flex items-center gap-2 mb-6">
            <img
              src={service.service_icon}
              alt={service.service_name}
              className="h-7 w-7 object-contain"
            />
            <h2 className="text-base font-bold text-gray-900">
              {service.service_name}
            </h2>
          </div>

          <div className="relative mb-4">
            <CreditCard
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <Input
              type="text"
              name="payment"
              id="payment"
              readOnly
              value={formatRupiah(service.service_tariff)}
              className="pl-9 py-5 text-gray-700 cursor-default focus-visible:ring-0 focus-visible:border-gray-300"
            />
          </div>

          <Button
            onClick={handlePay}
            disabled={isLoading}
            className="w-full rounded-sm py-4 bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer"
          >
            {isLoading ? "Memproses..." : "Bayar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
