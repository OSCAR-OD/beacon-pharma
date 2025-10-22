import axios from "axios";

export const API_BASE_URL = "http://localhost:5502"; 

const axiosInstance = axios.create({
baseURL: `${API_BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;