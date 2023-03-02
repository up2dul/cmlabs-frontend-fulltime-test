import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { type MealDetail } from './types';

//#region cn
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//#endregion cn

//#region textToSlug
function textToSlug(str: string) {
  return str.toLowerCase().replace(/ /g, '-');
}
//#endregion textToSlug

//#region slugToNormal
function capitalizeFirstLetter(str: string) {
  const firstLetter = str.charAt(0).toUpperCase();
  const result = [...str];
  result[0] = firstLetter;

  return result.join('');
}

function slugToNormal(slug: string) {
  return slug
    .split('-')
    .map((str) => capitalizeFirstLetter(str))
    .join(' ');
}
//#endregion slugToNormal

//#region mergeIngredientsMeasures
function mergeIngredientsMeasures(data: MealDetail) {
  const ingredients = Object.entries(data || [])
    .filter((ing) => ing[0].includes('strIngredient'))
    .map((ing) => ing[1])
    .filter((ing) => ing !== '');

  const measures = Object.entries(data || [])
    .filter((measure) => measure[0].includes('strMeasure'))
    .map((measure) => measure[1])
    .filter((measure) => measure !== '');

  return ingredients.map((ingredient, idx) => ({
    key: `${ingredient}-${measures[idx] as string}`,
    name: ingredient,
    measure: measures[idx],
  }));
}
//#endregion mergeIngredientsMeasures

export { cn, textToSlug, slugToNormal, mergeIngredientsMeasures };
