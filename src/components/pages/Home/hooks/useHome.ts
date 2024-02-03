import { touristQueries } from "@infra/queries";
import { useAuthStore } from "@infra/storage/store";
import { useState } from "react";

export default function useHome() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { userData } = useAuthStore();
  const { data, refetch } = touristQueries.useQueryTourist({
    page: currentPage,
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const refetchTourist = () => {
    refetch();
  };

  return {
    userData,
    currentPage,
    refetchTourist,
    touristList: data?.data,
    totalPages: data?.total_pages ?? 0,
    onPageChange,
  };
}
