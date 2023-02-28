export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealDetail extends Meal {
  strCategory: string;
  // ...
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
}
