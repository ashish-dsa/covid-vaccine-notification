export const ageCheck = (vaccineOver45: number, vaccineOver18: number, allChecked: boolean, adultsChecked: boolean) => {
  if (allChecked && vaccineOver45 > 0) {
    return true;
  }
  if (adultsChecked && vaccineOver18 > 0) {
    return true;
  }
  return false;
};
