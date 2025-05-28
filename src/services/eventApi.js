import axios from "axios";

const eventApi = axios.create({
  baseURL: "https://localhost:7122/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default eventApi;