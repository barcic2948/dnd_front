import axios from 'axios';

export const configRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
