import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { IIOSNotification } from "./models";
import { getNotificationId } from "./utils";

export const createLocalNotificationForIOS = (notification: IIOSNotification): void => {
  if (Platform.OS !== "ios") {
    return;
  }
  PushNotification.localNotification({
    title: notification.title,
    message: notification.message,
    id: getNotificationId(notification),
    userInfo: notification.userInfo ? notification.userInfo : {},
  });
};
