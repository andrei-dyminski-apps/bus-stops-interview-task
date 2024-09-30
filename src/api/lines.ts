import { apiClient } from "@/libs/api-client";
import type { AxiosResponse } from "axios";

export const getStops = (): Promise<AxiosResponse> => apiClient.get(`/stops`);
