import { useLocation, useNavigate } from "react-router-dom";
import { useTransactionMutation } from "@/features/transaction/services/transaction.api"
import { showConfirmPaymentModal, showStatusPayment } from "@/lib/swal";
import { formatRupiah } from "@/lib/currency";

interface ServiceState {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
}

export function usePayment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [transaction, { isLoading }] = useTransactionMutation();

  const service = state as ServiceState | null;

  const handlePay = async () => {
    if (!service) return;

    const confirm = await showConfirmPaymentModal({
      serviceName: service.service_name,
      amount: service.service_tariff,
    });

    if (!confirm.isConfirmed) return;

    try {
      await transaction({ service_code: service.service_code }).unwrap();

      await showStatusPayment({
        type: "success",
        amount: service.service_tariff,
        serviceName: service.service_name,
        navigate,
      });
    } catch {
      await showStatusPayment({
        type: "error",
        amount: service.service_tariff,
        serviceName: service.service_name,
        navigate,
      });
    }
  };

  return {
    service,
    isLoading,
    handlePay,
    formatRupiah,
  };
}
