import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7107/api",
  withCredentials: true,
  timeout: 10000,
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
    ) {
      // window.location.href = "/login";
      console.log("Redirecting to login due to 401 Unauthorized error.");
    }
    return Promise.reject(error);
  }
);

export default api;
