import axios from "axios";

const bookingApi = axios.create({
  baseURL:
    "https://booking-api-ventixe-e5hydeevg6htf7br.swedencentral-01.azurewebsites.net/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default bookingApi;
