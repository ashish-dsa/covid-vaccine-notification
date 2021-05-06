import axios from "axios";
import { HEADERS } from "./constants";

export const postRequest = async (url: string, data: object = {}, params: object = {}) => {
  try {
    const response = await axios.post(url, data, {
      headers: HEADERS,
    });
    return response;
  } catch (error) {
    return null;
  }
};
