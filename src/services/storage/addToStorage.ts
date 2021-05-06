import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};
