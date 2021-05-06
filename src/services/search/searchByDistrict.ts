import { getRequest } from "../httprequests/getRequest";

export const searchByDistrict = async (districtId: string) => {
  let tempdate = new Date();
  let date = [
    tempdate.getFullYear(),
    ("0" + (tempdate.getMonth() + 1)).slice(-2),
    ("0" + tempdate.getDate()).slice(-2),
  ].join("-");
  const currentDate = date.split("-").reverse().join("-");
  const DISTRICT_SEARCH_URL = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${districtId}&date=${currentDate}`;
  const response = await getRequest(DISTRICT_SEARCH_URL);
  if (response) {
    return response.data.centers;
  } else {
    return null;
  }
};
