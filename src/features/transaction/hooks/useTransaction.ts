import { useState } from "react";
import { useGetHistoryQuery } from "@/features/transaction/services/transaction.api";

export function useTransaction() {
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading, isFetching } = useGetHistoryQuery({
    limit: 5,
    offset,
  });

  const allHistory = data?.data?.records ?? [];

  return {
    LIMIT: 5,
    allHistory,
    isLoading,
    isFetching,
    hasMore: allHistory.length % 5 === 0,
    handleShowMore: () => setOffset((p) => p + 5),
  };
}
