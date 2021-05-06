import axios from "axios";
import { HEADERS } from "./constants";

export const getRequest = async (url: string, params: object = {}) => {
  try {
    const data = await axios.get(url, {
      headers: HEADERS,
    });
    return data;
  } catch (error) {
    return null;
  }
};
