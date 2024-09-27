import axios from "axios";
import { API_URL } from "@/constants/config";
import {
  NotificationType,
  useNotifications,
} from "@/features/the-notifications";

export const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { addNotification } = useNotifications();
    addNotification({
      type: NotificationType.ERROR,
      title: "Request failed",
      description: error?.message ?? "Something went wrong, please try again",
    });
    return Promise.reject(error);
  },
);
