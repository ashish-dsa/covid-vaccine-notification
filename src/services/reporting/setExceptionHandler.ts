import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import { stopForegroundService } from "services/foreground";
import logErrorToMyService from "services/reporting";

export const setExceptionHandler = () => {
  const handleError = (error: string | Error): void => {
    logErrorToMyService(error);
  };

  setJSExceptionHandler((error, _isFatal) => {
    handleError(error);
  }, true);

  setNativeExceptionHandler(errorString => {
    stopForegroundService();
    logErrorToMyService(errorString);
    handleError(errorString);
  });
};
