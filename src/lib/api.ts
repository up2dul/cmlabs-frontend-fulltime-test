import axios, { type AxiosInstance } from 'axios';

import type { Meal, Ingredient } from './types';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

function api(axios: AxiosInstance) {
  return {
    getAllIngredients: () => {
      return axios.get<{ meals: Ingredient[] }>('list.php?i=list');
    },
    getIngredient: (query: string) => {
      return axios.get<{ meals: Meal[] }>(`filter.php?i=${query}`);
    },
  };
}

export default api(instance);
