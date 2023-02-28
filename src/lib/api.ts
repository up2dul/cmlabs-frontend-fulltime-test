import axios, { type AxiosInstance } from 'axios';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

function api(axios: AxiosInstance) {
  return {
    getIngredients: <T>() => {
      return axios.get<T>('list.php?i=list');
    },
  };
}

export default api(instance);
