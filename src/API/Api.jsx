import axios from "axios";

const API = axios.create({
  baseURL: "https://gwl-v4-back-new.onrender.com" || "http://localhost:4000/api",
  withCredentials: true,
})
export default API;



