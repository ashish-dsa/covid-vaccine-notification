export const ageCheck = (vaccineOver45: number, vaccineOver18: number, senior: boolean, adult: boolean) => {
  if (senior && vaccineOver45 > 0) {
    return true;
  }
  if (adult && vaccineOver18 > 0) {
    return true;
  }
  return false;
};
