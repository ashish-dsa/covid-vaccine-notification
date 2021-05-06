import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import { IForegroundService } from "./models/IForegroundService";

export const startForegroundService = async (params: IForegroundService) => {
  try {
    ReactNativeForegroundService.start({
      id: params.id,
      title: params.title,
      message: params.message,
    });
  } catch (error) {}
};
