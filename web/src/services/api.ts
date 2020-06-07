import axios from 'axios'; // fetch também funcionaria, porém o axios podemos criar uma baseURL, que se repetirá em todas as requisições.

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;
