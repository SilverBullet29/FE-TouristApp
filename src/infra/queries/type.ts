import { APIResponseError } from "@infra/services/types";
import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

export interface AppUseQueryOptions<T>
  extends UseQueryOptions<T, APIResponseError, T, any> {}

export interface AppUseMutationOptions<T, M>
  extends UseMutationOptions<T, APIResponseError, M, any> {}
