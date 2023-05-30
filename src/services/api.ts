import axios from "axios";

//settings axios
const api = axios.create({
  baseURL: "https://test-candidaturas-front-end.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
