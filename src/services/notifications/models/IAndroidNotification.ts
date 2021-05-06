import { ILocalNotification } from "./ILocalNotification";

export interface IAndroidNotification extends ILocalNotification {
  channelId: string; // (required) channelId, if the channel doesn't exist, notification will not trigger.
  ticker?: string; // (optional)
  showWhen?: boolean; // (optional) default: true
  autoCancel?: boolean; // (optional) default: true
  largeIcon?: string; // (optional) default: "ic_launcher". Use "" for no large icon.
  largeIconUrl?: string; // (optional) default: undefined
  smallIcon?: string; // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
  bigText?: string; // (optional) default: "message" prop
  subText?: string; // (optional) default: none
  bigPictureUrl?: string; // (optional) default: undefined
  bigLargeIcon?: string; // (optional) default: undefined
  bigLargeIconUrl?: string; // (optional) default: undefined
  color?: string; // (optional) default: system default
  vibrate?: boolean; // (optional) default: true
  vibration?: number; // vibration length in milliseconds, ignored if vibrate=false, default: 1000
  tag?: string; // (optional) add tag to message
  group?: string; // (optional) add group to message
  groupSummary?: boolean; // (optional) set this notification to be the group summary for a group of notifications, default: false
  ongoing?: boolean; // (optional) set whether this is an "ongoing" notification
  priority?: "max" | "high" | "low" | "min" | "default"; // (optional) set notification priority, default: high
  visibility?: "private" | "public" | "secret"; // (optional) set notification visibility, default: private
  ignoreInForeground?: boolean; // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
  shortcutId?: string; // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
  onlyAlertOnce?: boolean; // (optional) alert will open only once with sound and notify, default: false;
  actions?: ["Yes", "No"]; // (Android only) See the doc for notification actions to know more
  importance?: "default" | "max" | "high" | "low" | "min" | "none" | "unspecified";
}
