import axios from "axios";
import logErrorToMyService from "services/reporting";
import { HEADERS } from "./constants";

export const getRequest = async (url: string, params: object = {}) => {
  try {
    const data = await axios.get(url, {
      headers: HEADERS,
    });
    logErrorToMyService(new Error("Successfuly fetched centers for " + url));
    return data;
  } catch (error) {
    logErrorToMyService(new Error("Failed to fetch centers for " + url));
    return null;
  }
};
