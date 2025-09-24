import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  await axios.get('http://localhost:8000/sanctum/csrf-cookie');
  return config;
});

export default api;
