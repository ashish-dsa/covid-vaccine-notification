export const vaccineBrandCheck = (vaccineName: string, covaxin: boolean, covishield: boolean) => {
  if (vaccineName.toLocaleLowerCase() === "covaxin" && !covaxin) {
    return false;
  }
  if (vaccineName.toLocaleLowerCase() === "covishield" && !covishield) {
    return false;
  }
  return true;
};
