import { IFilters } from "screens/models";
import { ageCheck } from "./ageCheck";
import { feeCheck } from "./feeCheck";
import { vaccineBrandCheck } from "./vaccineBrandCheck";

export const formatResponse = (response: Array<any>, filters: IFilters) => {
  const formattedResponse = response
    .map((center: any) => {
      try {
        let vaccineOver45 = -2;
        let vaccineOver18 = -2;
        let vaccineName = "";
        const item = center;
        if (!feeCheck(item.fee_type, filters.free, filters.paid)) {
          return null;
        }
        item.sessions.forEach((session: any) => {
          vaccineName = session.vaccine;
          if (session.min_age_limit === 45) {
            if (session.available_capacity) {
              vaccineOver45 += session.available_capacity;
            }
          } else if (session.min_age_limit === 18) {
            if (session.available_capacity) {
              vaccineOver18 += session.available_capacity;
            }
          }
        });
        if (!ageCheck(vaccineOver45, vaccineOver18, filters.senior, filters.adult)) {
          return null;
        }
        if (!vaccineBrandCheck(vaccineName, filters.covaxin, filters.covishield)) {
          return null;
        }
        return { ...center, vaccineOver18: vaccineOver18, vaccineOver45: vaccineOver45, vaccineName: vaccineName };
      } catch (error) {}
    })
    .filter(function (el) {
      return el != null;
    });
  return formattedResponse;
};
