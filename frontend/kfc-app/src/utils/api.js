import axios from "axios";

const baseURL = (process.env.REACT_APP_API_URL || "http://localhost:8080").replace(/\/+$/, "");

export const apiUrl = (path) => `${baseURL}/${path.replace(/^\/+/, "")}`;

const api = axios.create({ baseURL });

export default api;