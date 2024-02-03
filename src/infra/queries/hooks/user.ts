import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../queryKey";
import { User } from "@infra/services/types";
import { AppUseQueryOptions } from "../type";
import { getProfile } from "@infra/services/api";

export const useQueryProfile = (
  params: User.Request,
  options?: AppUseQueryOptions<User.Response>,
) =>
  useQuery({
    queryKey: [QueryKey.MY_PROFILE],
    queryFn: () => getProfile(params),
    ...options,
  });
