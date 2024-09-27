import { apiClient } from "@/libs/api-client";

export const getStops = async () => {
  return await apiClient.get(`/stops`);
};
