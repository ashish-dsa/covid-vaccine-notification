import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {}
};
