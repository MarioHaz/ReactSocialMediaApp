import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:6000/api/",
  withCredentials: true,
});


