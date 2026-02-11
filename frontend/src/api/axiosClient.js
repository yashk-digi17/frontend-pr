import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://utilization-adjacent-triumph-shipments.trycloudflare.com",
//   timeout: 15000,
});

// Request Interceptor (no auth)
axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
