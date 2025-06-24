import axios from "axios";

const API = axios.create({
  baseURL: "https://gwl-v4-back-1.onrender.com",
  // baseURL: "http://localhost:4000/api",
  withCredentials: true,
})
export default API;



