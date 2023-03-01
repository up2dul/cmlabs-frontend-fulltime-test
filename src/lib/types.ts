export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type MealDetail = Meal & {
  strCategory: string;
  // ...
};

export type Ingredient = {
  idIngredient: string;
  strIngredient: string;
};
