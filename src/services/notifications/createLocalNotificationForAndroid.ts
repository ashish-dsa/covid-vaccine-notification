import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { NOTIFICATIONS } from "./constants";
import { IAndroidNotification } from "./models";
import { getNotificationId } from "./utils";

export const createLocalNotificationForAndroid = (notification: IAndroidNotification): void => {
  if (Platform.OS !== "android") {
    return;
  }
  PushNotification.localNotification({
    title: notification.title,
    message: notification.message,
    channelId: NOTIFICATIONS.NOTIFICATION_CHANNEL_ID,
    id: getNotificationId(notification),
    userInfo: notification.userInfo ? notification.userInfo : {},
    priority: notification.priority ? notification.priority : "max",
    vibrate: notification.vibrate ? notification.vibrate : true,
    playSound: notification.playSound ? notification.playSound : true,
    ongoing: notification.ongoing,
    soundName: notification.soundName ? notification.soundName : "sound.mp3",
  });
};
