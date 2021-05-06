import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { NOTIFICATIONS } from "./constants";

export const createLocalNotificationForRemote = notification => {
  if (Platform.OS === "ios" && !notification.title) {
    return;
  }
  if (Platform.OS === "android") {
    PushNotification.localNotification({
      title: notification.data.title,
      message: notification.data.body,
      channelId: NOTIFICATIONS.NOTIFICATION_CHANNEL_ID,
      id: notification.data.id ? notification.data.id : Math.floor(Math.random() * 1000 + 1),
      body: notification.data.message,
    });
  } else {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.message,
      id: notification.id ? notification.id : Math.floor(Math.random() * 1000 + 1),
    });
  }
};
