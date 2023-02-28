import axios, { type AxiosInstance } from 'axios';

import { type Ingredients } from './types';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

function api(axios: AxiosInstance) {
  return {
    getIngredients: () => {
      return axios.get<Ingredients>('list.php?i=list');
    },
  };
}

export default api(instance);
