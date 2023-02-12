import axios, { isAxiosError } from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000,
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: unknown) => {
    if (isAxiosError(error)) {
      return error;
    }
    return error;
  }
);
