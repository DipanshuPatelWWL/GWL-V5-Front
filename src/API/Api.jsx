import axios from "axios";

const API = axios.create({
  baseURL: "https://gwl-v4-back-2.onrender.com" || "http://localhost:4000/api",
  withCredentials: true,
})
export default API;



