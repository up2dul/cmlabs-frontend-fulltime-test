import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

//#region cn
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//#endregion cn

export { cn };
