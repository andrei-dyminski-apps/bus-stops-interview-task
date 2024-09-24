import { apiClient } from "@/libraries/api-client";

export const getStops = async () => {
  return await apiClient.get(`/stops`);
};
