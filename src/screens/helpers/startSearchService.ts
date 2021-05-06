import { CONFIG } from "config";
import { addForegroundTask } from "../../services/foreground/addForegroundTask";
import { FOREGROUND_SERVICE, FOREGROUND_TASKS } from "../../services/foreground/constants";
import { IForegroundService } from "../../services/foreground/models/IForegroundService";
import { IForegroundTask } from "../../services/foreground/models/IForegroundTask";
import { startForegroundService } from "../../services/foreground/startForegroundService";
import { stopForegroundService } from "../../services/foreground/stopForegroundService";
import { executeSearch } from "./executeSearch";


export const startSearchService = async () => {
  await stopForegroundService();
  const foregroundTaskParams: IForegroundTask = {
    delay: CONFIG.SEARCH_FREQUENCY,
    onLoop: true,
    taskId: FOREGROUND_TASKS.searchTask,
    onError: (error: any) => {},
  };
  await addForegroundTask(executeSearch, foregroundTaskParams);
  const foregroundServiceParams: IForegroundService = {
    id: FOREGROUND_SERVICE.searchService,
    title: "Searching Vaccination Centers",
    message:
      "We will notify you when the vaccine is available! Push the app in background, Do not kill the app!",
  };
  await startForegroundService(foregroundServiceParams);
};
