export interface IRemoteNotification {
  foreground: boolean; // BOOLEAN: If the notification was received in foreground or not
  userInteraction: boolean; // BOOLEAN: If the notification was opened by the user from the notification area or not
  message: string; // STRING: The notification message
  data: object; // OBJECT: The push data or the defined userInfo in local notifications
}
