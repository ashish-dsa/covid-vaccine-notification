export const getDDMMYYYY = () => {
  const currentDate = new Date();
  const reversedDate = [
    currentDate.getFullYear(),
    ("0" + (currentDate.getMonth() + 1)).slice(-2),
    ("0" + currentDate.getDate()).slice(-2),
  ].join("-");
  const ddmmyyyy = reversedDate.split("-").reverse().join("-");
  return ddmmyyyy;
};
