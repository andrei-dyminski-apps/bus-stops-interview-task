import { apiClient } from "@/libs/api-client";

export const getStops = () => apiClient.get(`/stops`);
