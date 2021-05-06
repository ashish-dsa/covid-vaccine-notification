import { Platform } from "react-native";
import { createLocalNotificationForAndroid, createLocalNotificationForIOS } from ".";
import { IAndroidNotification } from "./models";

export const createLocalNotification = (notification: IAndroidNotification): void => {
  if (Platform.OS === "ios") {
    return;
  }
  if (Platform.OS === "android") {
    createLocalNotificationForAndroid(notification);
  } else {
    createLocalNotificationForIOS(notification);
  }
};
