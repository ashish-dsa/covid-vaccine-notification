import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { NOTIFICATIONS } from "./constants";

export const createChannel = (): void => {
  if (Platform.OS !== "android") {
    return;
  }
  PushNotification.createChannel(
    {
      channelId: NOTIFICATIONS.NOTIFICATION_CHANNEL_ID,
      channelName: NOTIFICATIONS.NOTIFICATION_CHANNEL_NAME,
      playSound: true,
      importance: 5,
      vibrate: true,
      soundName: "sound.mp3",
    },
    created => {},
  );
};
