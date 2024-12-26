import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formNum(dt:number, country:string = 'id-ID'){
  return new Intl.NumberFormat(country).format(dt);
}