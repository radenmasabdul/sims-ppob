import AppHeader from "@/components/common/AppHeader";
import TransactionItem from "../../components/TransactionItem";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTransaction } from "../../hooks/useTransaction";

export default function TransactionPage() {
  const { LIMIT, allHistory, handleShowMore, hasMore, isFetching, isLoading } = useTransaction();
  
  return (
    <>
      <AppHeader />

      <div className="mt-10">
        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Semua Transaksi
        </h2>

        {isLoading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: LIMIT }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : allHistory.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            Belum ada transaksi.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {allHistory.map((item) => (
              <TransactionItem
                key={item.invoice_number}
                transaction_type={item.transaction_type}
                description={item.description}
                total_amount={item.total_amount}
                created_on={item.created_on}
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="ghost"
              onClick={handleShowMore}
              disabled={isFetching}
              className="text-red-500 hover:text-red-600 hover:bg-transparent font-semibold cursor-pointer"
            >
              {isFetching ? (
                <>
                  <Loader2 size={16} className="animate-spin mr-2" />
                  Memuat...
                </>
              ) : (
                "Show more"
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
