import { IFilters } from "screens/models";
import { ageCheck } from "./ageCheck";
import { doseCheck } from "./doseCheck";
import { feeCheck } from "./feeCheck";
import { vaccineBrandCheck } from "./vaccineBrandCheck";

export const formatResponse = (response: Array<any>, filters: IFilters) => {
  const formattedResponse = response
    .map((center: any) => {
      try {
        let vaccineOver45 = -6;
        let vaccineOver18 = -6;
        let vaccineName = "";
        let dose1 = -6;
        let dose2 = -6;
        const item = center;
        if (!feeCheck(item.fee_type, filters.free, filters.paid)) {
          return null;
        }
        item.sessions.forEach((session: any) => {
          vaccineName = session.vaccine;
          if (session.min_age_limit === 45) {
            if (session.available_capacity) {
              vaccineOver45 += session.available_capacity;
              dose1 += session.available_capacity_dose1;
              dose2 += session.available_capacity_dose2;
            }
          } else if (session.min_age_limit === 18) {
            if (session.available_capacity) {
              vaccineOver18 += session.available_capacity;
              dose1 += session.available_capacity_dose1;
              dose2 += session.available_capacity_dose2;
            }
          }
        });
        if (!ageCheck(vaccineOver45, vaccineOver18, filters.senior, filters.adult)) {
          return null;
        }
        if (!vaccineBrandCheck(vaccineName, filters.covaxin, filters.covishield)) {
          return null;
        }
        if (!doseCheck(dose1, dose2, filters.dose1, filters.dose2)) {
          return null;
        }
        return {
          ...center,
          vaccineOver18: vaccineOver18,
          vaccineOver45: vaccineOver45,
          vaccineName: vaccineName,
          dose1: dose1,
          dose2: dose2,
        };
      } catch (error) {}
    })
    .filter(function (el) {
      return el != null;
    });
  return formattedResponse;
};
