import { useMutation } from "@tanstack/react-query";
import { User } from "@infra/services/types";
import { AppUseMutationOptions } from "../type";
import { getProfile } from "@infra/services/api";

export const useMutationProfile = (
  options?: AppUseMutationOptions<User.Response, User.Request>,
) =>
  useMutation({
    mutationFn: getProfile,
    ...options,
  });
