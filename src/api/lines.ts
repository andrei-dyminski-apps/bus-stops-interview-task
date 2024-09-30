import { apiClient } from "@/libs/api-client";
import type { AxiosResponse } from "axios";
import { StopItem } from "@/types/store";

export const getStops = (): Promise<AxiosResponse<StopItem[]>> =>
  apiClient.get(`/stops`);
