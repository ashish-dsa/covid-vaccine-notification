import AsyncStorage from "@react-native-async-storage/async-storage";

export const removeFromStorage = (key: string) => {
  AsyncStorage.removeItem(key);
};
