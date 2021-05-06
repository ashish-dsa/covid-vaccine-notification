import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import { mockSleep } from "../../utils/mockSleep";
import { IForegroundTask } from "./models/IForegroundTask";

export const addForegroundTask = async (callback: Function, params: IForegroundTask) => {
  try {
    ReactNativeForegroundService.add_task(callback, {
      delay: params.delay,
      onLoop: params.onLoop,
      taskId: params.taskId,
      onError: params.onError,
    });
    await mockSleep(500);
  } catch (error) {}
};
