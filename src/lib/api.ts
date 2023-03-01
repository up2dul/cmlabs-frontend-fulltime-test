import axios, { type AxiosInstance } from 'axios';

import type { Meal, Ingredient, MealDetail } from './types';

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

function api(axios: AxiosInstance) {
  return {
    getAllIngredients: async () => {
      const { data } = await axios.get<{ meals: Ingredient[] }>(
        'list.php?i=list',
      );
      // only show 16 ingridients
      return data.meals.slice(0, 16);
    },
    getIngredient: async (query: string) => {
      const { data } = await axios.get<{ meals: Meal[] }>(
        `filter.php?i=${query}`,
      );
      return data.meals;
    },
    getAllMeals: async () => {
      const { data } = await axios.get<{ meals: MealDetail[] }>(
        'search.php?s=',
      );
      return data.meals;
    },
    getMeal: async (id: string) => {
      const { data } = await axios.get<{ meals: MealDetail[] }>(
        `lookup.php?i=${id}`,
      );
      return data.meals[0];
    },
  };
}

export default api(instance);
