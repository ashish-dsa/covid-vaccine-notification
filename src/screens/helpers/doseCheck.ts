export const doseCheck = (dose1: number, dose2: number, filterDose1: boolean, filterDose2: boolean) => {
  if (filterDose1 && dose1 > 0) {
    return true;
  }
  if (filterDose2 && dose2 > 0) {
    return true;
  }
  return false;
};
