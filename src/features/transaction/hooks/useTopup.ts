import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QUICK_AMOUNTS } from "../types";
import { useTopUpMutation } from "../services/transaction.api";
import { showStatusModal, showConfirmTopUpModal } from "@/lib/swal";
import { formatRupiah } from "@/lib/currency";

export function useTopup() {
  const navigate = useNavigate();
  const [topUp, { isLoading }] = useTopUpMutation();

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleQuickSelect = (amount: number) => {
    setSelectedAmount(amount);
    setInputValue(amount.toString());
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    setInputValue(raw);
    setSelectedAmount(null);
    setError("");
  };

  const handleTopUp = async () => {
    const amount = parseInt(inputValue, 10);

    if (!amount || amount <= 0) {
      setError("Masukan nominal top up yang valid");
      return;
    }

    if (amount < 10000) {
      setError("Minimal top up adalah Rp10.000");
      return;
    }

    if (amount > 1000000) {
      setError("Maksimal top up adalah Rp1.000.000");
      return;
    }

    const confirm = await showConfirmTopUpModal(amount);

    if (!confirm.isConfirmed) return;

    try {
      await topUp({ top_up_amount: amount }).unwrap();

      setInputValue("");
      setSelectedAmount(null);

      await showStatusModal({
        type: "success",
        amount,
        navigate,
      });
    } catch {
      await showStatusModal({
        type: "error",
        amount,
        navigate,
      });
    }
  };

  const parsedAmount = parseInt(inputValue, 10);
  const isValid =
    !isNaN(parsedAmount) && parsedAmount >= 10000 && parsedAmount <= 1000000;

  return {
    navigate,
    QUICK_AMOUNTS,
    inputValue,
    error,
    selectedAmount,
    isLoading,
    handleQuickSelect,
    handleInputChange,
    handleTopUp,
    isValid,
    formatRupiah
  }
}