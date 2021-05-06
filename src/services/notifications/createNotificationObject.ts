import { IAndroidNotification, IGenericNotification, IIOSNotification } from "./models";

export const createNotificationObject = (notification: IGenericNotification):Array<any> => {
  
  const androidNotification: IAndroidNotification = {
    title: notification.title,
    message: notification.message,
    channelId: notification.channelId,
    id: notification.id,
    userInfo: notification.userInfo,
  };
  const iOSNotification: IIOSNotification = {
    title: notification.title,
    message: notification.message,
    id: notification.id,
    userInfo: notification.userInfo,
  };
  return [androidNotification, iOSNotification];
}