import axios from "axios";

const bookingApi = axios.create({
  baseURL: "https://localhost:7101/api",
//   withCredentials: true,       // för att skicka JWT-cookie
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default bookingApi;