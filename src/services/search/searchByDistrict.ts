import { getDDMMYYYY } from "utils/getDDMMYYYY";
import { getRequest } from "../httprequests/getRequest";

export const searchByDistrict = async (districts: Array<string>) => {
  if (!districts) {
    return null;
  }
  const currentDate = getDDMMYYYY();
  const districtList = [];
  if (districts[0] !== null) {
    districtList.push(districts[0].toString().trim());
  }
  if (districts[1] !== null) {
    districtList.push(districts[1].toString().trim());
  }
  const promises = [];
  for (let i = 0; i < districtList.length; i++) {
    if (districtList[i].length > 0) {
      const DISTRICT_SEARCH_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${districtList[i]}&date=${currentDate}`;
      promises.push(getRequest(DISTRICT_SEARCH_URL));
    }
  }
  const multipleResponses = await Promise.all(promises);
  const collatedResponse = [];
  for (let i = 0; i < multipleResponses.length; i++) {
    const singleResponse = multipleResponses[i];
    if (singleResponse) {
      collatedResponse.push(...singleResponse.data.centers);
    }
  }
  return collatedResponse.length > 0 ? collatedResponse : null;
};
