export const feeCheck = (fee: string, freeChecked: boolean, paidChecked: boolean) => {
  if (!freeChecked && fee === "Free") {
    return false;
  }
  if (!paidChecked && fee !== "Free") {
    return false;
  }
  return true;
};
