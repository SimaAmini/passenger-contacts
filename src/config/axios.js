import axios from "axios";

const defaults = {
  baseURL: "http://localhost:1337",
  headers: () => ({
    "Content-Type": "application/json",
  }),
};

const api = (method, url, params) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params,
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
