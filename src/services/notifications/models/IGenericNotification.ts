import { IAndroidNotification } from "./IAndroidNotification";
import { IIOSNotification } from "./IIOSNotification";

export interface IGenericNotification extends IIOSNotification, IAndroidNotification {
  
}