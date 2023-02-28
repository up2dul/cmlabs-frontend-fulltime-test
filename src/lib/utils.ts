import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

export { cn, textToSlug, slugToNormal };
