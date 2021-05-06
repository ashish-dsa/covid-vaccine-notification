import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import { mockSleep } from "../../utils/mockSleep";

export const removeForegroundTask = async (taskId: string) => {
  try {
    if (ReactNativeForegroundService.is_task_running(taskId)) {
      ReactNativeForegroundService.remove_task(taskId);
    }
    await mockSleep(1000);
  } catch (error) {}
};
