export const vaccineBrandCheck = (vaccineName: string, covaxin: boolean, covishield: boolean) => {
  if (vaccineName.toLocaleLowerCase() === "covaxin" && covaxin) {
    return true;
  }
  if (vaccineName.toLocaleLowerCase() === "covishield" && covishield) {
    return true;
  }
  return false;
};
