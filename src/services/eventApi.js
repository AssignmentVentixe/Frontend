import axios from "axios";

const eventApi = axios.create({
  baseURL:
    "https://event-ventixe-fpbddha3bcfmc4ef.swedencentral-01.azurewebsites.net/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default eventApi;
