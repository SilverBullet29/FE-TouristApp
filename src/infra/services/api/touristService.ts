import axiosClient from "../axiosClient";
import { Tourist } from "../types/tourist";

export const getTourist = (
  params: Tourist.Request,
): Promise<Tourist.Response> => axiosClient.get("/api/Tourist", { params });

export const putTourist = ({
  id,
  ...params
}: Tourist.RequestEdit): Promise<Tourist.Response> =>
  axiosClient.put(`/api/Tourist/${id}`, params);

export const deleteTourist = ({
  id,
}: Tourist.RequestDelete): Promise<Tourist.Response> =>
  axiosClient.delete(`/api/Tourist/${id}`);

export const postTourist = ({
  ...params
}: Tourist.RequestAdd): Promise<Tourist.Response> =>
  axiosClient.post("/api/Tourist", params);

export const getTouristDetail = ({
  id,
}: Tourist.RequestDetail): Promise<Tourist.ResponseDetail> =>
  axiosClient.get(`/api/Tourist/${id}`);
