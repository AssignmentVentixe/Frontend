import axios from "axios";

const api = axios.create({
  baseURL: "https://auth-api-ventixe-b9dyccgkh4egdtd8.swedencentral-01.azurewebsites.net/api",
  withCredentials: true,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      !error.config.url.includes("/auth/login") &&
      !window.location.pathname.includes("/login")
    ) 
    return Promise.reject(error);
  }
);

export default api;
