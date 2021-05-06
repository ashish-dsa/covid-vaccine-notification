import { NOTIFICATIONS } from "../../services/notifications";
import { createLocalNotification } from "../../services/notifications/createLocalNotification";
import { IAndroidNotification } from "../../services/notifications/models";
import { searchByDistrict } from "../../services/search/searchByDistrict";
import { searchByPincode } from "../../services/search/searchByPincode";
import { STORAGE } from "../../services/storage/constants";
import { getFromStorage } from "../../services/storage/getFromStorage";
import { SEARCH_OPTIONS } from "../constants";
import { formatResponse } from "./formatResponse";

export const executeSearch = async (): Promise<any> => {
  try {
    const paramsString = await getFromStorage(STORAGE.searchParams);
    if (!paramsString || !(typeof paramsString === "string")) {
      return [];
    }
    const params = JSON.parse(paramsString);
    let response = null;
    let formattedResponse = [];
    if (params.searchType === SEARCH_OPTIONS.pincode) {
      response = await searchByPincode(params.searchParams);
    } else {
      response = await searchByDistrict(params.searchParams);
    }
    if (response && response.length) {
      formattedResponse = formatResponse(
        response,
        params.allChecked,
        params.adultsChecked,
        params.freeChecked,
        params.paidChecked,
      );
      if (formattedResponse.length > 0) {
        const localNotification: IAndroidNotification = {
          channelId: NOTIFICATIONS.NOTIFICATION_CHANNEL_ID,
          message: "Vaccine is in stock. Hurry! Open app and book an appointment.",
          id: NOTIFICATIONS.VACCINE_CENTER_FOUND,
        };
        createLocalNotification(localNotification);
      }
    }
    return formattedResponse;
  } catch (error) {
    return [];
  }
};
