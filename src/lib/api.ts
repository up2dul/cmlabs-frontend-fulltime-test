import axios, { type AxiosInstance } from 'axios';

import type { Meal, Ingredient, MealDetail } from './types';

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
    getAllMeals: () => {
      return axios.get<{ meals: MealDetail[] }>('search.php?s=');
    },
    getMeal: async (id: string) => {
      const res = await axios.get<{ meals: MealDetail[] }>(
        `lookup.php?i=${id}`,
      );
      return res.data.meals[0];
    },
  };
}

export default api(instance);
