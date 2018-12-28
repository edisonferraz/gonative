import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token 670439cbab25ae2f91a575ceb878ac4bca2e1c0c',
  },
});

export default api;
