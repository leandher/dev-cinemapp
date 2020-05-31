import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=925eba28&'
});

export default api;