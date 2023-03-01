export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type MealDetail = Meal & {
  strInstructions: string;
  strYoutube: string;
  //#region strIngredient
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  //#endregion strIngredient
  //#region strMeasure
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  //#endregion strMeasure
};

export type Ingredient = {
  idIngredient: string;
  strIngredient: string;
};
