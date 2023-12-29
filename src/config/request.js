import { Axios } from "./axios";

// const convertAmplifyParamsToAxiosParams = (...args) => {
//   const [path, config] = args;
//   const { body, headers, ...rest } = config || {};

//   return [path, { body, headers, ...rest }];
// };

export const Request = {
  get: async (...args) => {
    const response = await Axios.get(...args);

    if (response.data) {
      return response.data;
    }
    return response;
  },
};
