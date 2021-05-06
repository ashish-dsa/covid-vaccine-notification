import { IAndroidNotification, IIOSNotification } from "./models";

export const getNotificationId = (notification: IIOSNotification | IAndroidNotification): number => {
  if (notification.data) {
    if (notification.data.id) {
      return notification.data.id;
    } else if (notification.id) {
      return notification.id;
    } else {
      return Math.floor(Math.random() * 1000 + 1);
    }
  }
  if (notification.id) {
    return notification.id;
  } else {
    return Math.floor(Math.random() * 1000 + 1);
  }
};
