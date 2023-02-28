interface Meal {
  idIngredient: string;
  strIngredient: string;
}

export interface IngredientProps extends Meal {
  slug: string;
}

export interface Ingredients {
  meals: Meal[];
}
