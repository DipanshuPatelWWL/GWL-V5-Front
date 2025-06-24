import axios from "axios";

const API = axios.create({
  baseURL: "https://gwl-v4-back.onrender.com",
  withCredentials: true,
})
export default API;



