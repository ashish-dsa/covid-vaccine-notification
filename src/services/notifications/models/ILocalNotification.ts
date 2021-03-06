export interface ILocalNotification {
  id?: number; // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
  title?: string; // (optional)
  message: string; // (required)
  userInfo?: object; // (optional) default: {} (using null throws a JSON value '<null>' error)
  playSound?: boolean; // (optional) default: true
  soundName?: string; // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  number?: string | number; // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  repeatType?: "week" | "day" | "hour" | "minute" | "time"; // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
  repeatTime?: number;
}
