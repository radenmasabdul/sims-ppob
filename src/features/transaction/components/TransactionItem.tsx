import { formatRupiah } from "@/lib/currency";
import { formatDate } from "@/lib/utils";

interface TransactionItemProps {
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

export default function TransactionItem({
  transaction_type,
  description,
  total_amount,
  created_on,
}: TransactionItemProps) {
  const isCredit = transaction_type === "TOPUP";

  return (
    <div className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4">
      <div>
        <p
          className={`text-xl font-bold ${isCredit ? "text-emerald-500" : "text-red-500"}`}
        >
          {isCredit ? "+ " : "- "}
          {formatRupiah(total_amount)}
        </p>
        <p className="text-xs text-gray-400 mt-1">{formatDate(created_on)}</p>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
