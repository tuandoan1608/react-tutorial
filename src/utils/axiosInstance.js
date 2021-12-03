/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import authHeader from '../services/auth.header';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = authHeader();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
   
    return Promise.reject(err);
  }
);

export { axiosInstance };