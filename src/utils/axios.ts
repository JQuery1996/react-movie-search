// import { BASE_URL } from "apis/base";
import axios from "axios";

// create a new axios instance
const api = axios.create({
  baseURL: "/",
});

api.defaults.headers.post["Content-Type"] = "application/json";

// add a request interceptor to add the token to all requests
api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    token && (config.headers.authorization = `Bearer ${token}`);
    return config;
  },
  (error: any) => Promise.reject(error)
);

// add a response interceptors to handler errors;

api.interceptors.response.use(
  (response: any) => response,
  (error: any) => Promise.reject(error)
);

export { api };
