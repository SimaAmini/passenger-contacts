import { Axios } from "./axios";

export const Request = {
  get: async (...args) => {
    const response = await Axios.get(...args);
    return response;
  },
};
