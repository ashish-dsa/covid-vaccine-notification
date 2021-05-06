import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { createLocalNotificationForRemote } from "./createLocalNotificationForRemote";

export const registerPushNotifications = (): void => {
  PushNotification.configure({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRegister: function (token) {},
    onNotification: function (notification) {
      if (!notification.userInteraction) {
        createLocalNotificationForRemote(notification);
      }
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onRegistrationError: function (error) {},
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === "ios",
  });
};
