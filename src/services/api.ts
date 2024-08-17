import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-todo-lemon.vercel.app/'
});
export default api;
