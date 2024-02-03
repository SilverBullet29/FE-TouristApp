import axiosClient from "../axiosClient";
import { User } from "../types";

export const getProfile = ({
  id,
  ...params
}: User.Request): Promise<User.Response> =>
  axiosClient.get(`/api/users/${id}`, { params });
