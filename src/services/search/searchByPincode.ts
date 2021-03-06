import { getDDMMYYYY } from "utils/getDDMMYYYY";
import { getRequest } from "../httprequests/getRequest";

export const searchByPincode = async (pincodes: any) => {
  if (!pincodes) {
    return null;
  }
  const currentDate = getDDMMYYYY();
  const pincodeList = pincodes.split(",").map((pincode: any) => {
    return pincode.toString().trim();
  });
  const promises = [];
  for (let i = 0; i < pincodeList.length; i++) {
    const PINCODE_SEARCH_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=${pincodeList[i]}&date=${currentDate}`;
    promises.push(getRequest(PINCODE_SEARCH_URL));
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
