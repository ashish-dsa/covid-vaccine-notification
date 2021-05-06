import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import { mockSleep } from "../../utils/mockSleep";
export const stopForegroundService = async () => {
  try {
    ReactNativeForegroundService.stop();
    await mockSleep(1000);
  } catch (error) {}
};
