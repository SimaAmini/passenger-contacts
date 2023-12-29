import axios from "axios";
import queryString from "query-string";

const defaults = {
  baseURL: "http://localhost:1337",
  headers: () => ({
    "Content-Type": "application/json",
  }),
};

const api = (method, url) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      paramsSerializer: {
        serialize: (params) =>
          queryString.stringify(params, { arrayFormat: "bracket" }),
      },
    }).then(
      (response) => resolve(response.data),
      (error) => reject(error),
    );
  });

export const Axios = {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  delete: (...args) => api("delete", ...args),
};
