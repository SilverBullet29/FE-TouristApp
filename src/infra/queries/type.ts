import { APIResponseError } from "@infra/services/types";
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

export interface AppUseQueryOptions<T>
  extends Omit<UseQueryOptions<T, APIResponseError, T, any>, "queryKey"> {}

export interface AppUseMutationOptions<T, M>
  extends UseMutationOptions<T, APIResponseError, M, any> {}
