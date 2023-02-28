type Meals = Array<{
  idIngredient: string;
  strIngredient: string;
}>;

export interface Ingredients {
  meals: Meals;
}
