export const mockSleep = async (delay: number) => {
  await new Promise(resolve => setTimeout(resolve, delay));
};
