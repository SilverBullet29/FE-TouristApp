import { Tourist } from "@infra/services/types/tourist";
import { AppUseMutationOptions, AppUseQueryOptions } from "../type";
import { getTourist, putTourist, deleteTourist } from "@infra/services/api";
import { QueryKey } from "../queryKey";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useQueryTourist = (
  params: Tourist.Request,
  options?: AppUseQueryOptions<Tourist.Response>,
) =>
  useQuery({
    queryKey: [QueryKey.TOURIST_LIST, params],
    queryFn: () => getTourist(params),
    ...options,
  });

export const useQueryEdit = (
  options?: AppUseMutationOptions<Tourist.ResponseEdit, Tourist.RequestEdit>,
) =>
  useMutation({
    mutationFn: putTourist,
    ...options,
  });

export const useQueryDelete = (
  options?: AppUseMutationOptions<
    Tourist.ResponseDelete,
    Tourist.RequestDelete
  >,
) =>
  useMutation({
    mutationFn: deleteTourist,
    ...options,
  });
