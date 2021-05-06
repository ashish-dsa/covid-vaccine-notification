import { addForegroundTask } from "../../services/foreground/addForegroundTask";
import { FOREGROUND_SERVICE, FOREGROUND_TASKS } from "../../services/foreground/constants";
import { IForegroundService } from "../../services/foreground/models/IForegroundService";
import { IForegroundTask } from "../../services/foreground/models/IForegroundTask";
import { startForegroundService } from "../../services/foreground/startForegroundService";
import { stopForegroundService } from "../../services/foreground/stopForegroundService";
import { executeSearch } from "./executeSearch";

const SEARCH_DELAY = 15000;
export const startSearchService = async () => {
  await stopForegroundService();
  const foregroundTaskParams: IForegroundTask = {
    delay: SEARCH_DELAY,
    onLoop: true,
    taskId: FOREGROUND_TASKS.searchTask,
    onError: (error: any) => {},
  };
  await addForegroundTask(executeSearch, foregroundTaskParams);
  const foregroundServiceParams: IForegroundService = {
    id: FOREGROUND_SERVICE.searchService,
    title: "Searching Vaccination Centers",
    message:
      "Checking for vaccine centers in the background. We will notify you when the vaccine is available! Push the app in background, Do not kill the app!",
  };
  await startForegroundService(foregroundServiceParams);
};
