import axios from "axios";

//settings axios
const api = axios.create({
  baseURL: "https://blocks-catalog-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
