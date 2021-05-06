import { ILocalNotification } from "./ILocalNotification";

export interface IIOSNotification extends ILocalNotification {
  category?: string; // (optional) default: empty string
}
