export enum NotificationType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export type NotificationItem = {
  type: NotificationType;
  title: string;
  description?: string;
};

export type NewNotification = {
  duration?: number;
} & NotificationItem;

export type Notification = {
  id: number;
} & NewNotification;

export type NotificationsController = {
  notifications: Notification[];
  addNotification: (notification: NewNotification) => void;
  removeNotification: (id: number) => void;
};
