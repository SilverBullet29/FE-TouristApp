import { touristQueries } from "@infra/queries";
import { useAuthStore } from "@infra/storage/store";
import { useEffect, useRef, useState } from "react";

export default function useHome() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { userData } = useAuthStore();
  const { data, refetch, isLoading } = touristQueries.useQueryTourist({
    page: currentPage,
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const refetchTourist = () => {
    refetch();
  };

  useEffect(() => {
    if (data?.total_pages && data?.total_pages !== totalPages) {
      setTotalPages(data?.total_pages);
    }
  }, [data?.total_pages, totalPages]);

  return {
    userData,
    currentPage,
    refetchTourist,
    touristList: data?.data,
    totalPages,
    onPageChange,
    isLoading,
  };
}
