import { reactive } from "vue";
import {
  NotificationType,
  type Notification,
  type NotificationsController,
  type NewNotification,
} from "../types";

const notifications: Notification[] = reactive([]);

export function useNotifications(): NotificationsController {
  const addNotification = ({
    title,
    description,
    type = NotificationType.ERROR,
    duration = 5000,
  }: NewNotification): void => {
    notifications.push({ id: Date.now(), title, description, type, duration });

    setTimeout(
      (): void => removeNotification(notifications[0].id),
      notifications[0].duration,
    );
  };

  const removeNotification = (id: number): void => {
    const index = notifications.findIndex(
      (notification) => notification.id === id,
    );
    if (index !== -1) notifications.splice(index, 1);
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
