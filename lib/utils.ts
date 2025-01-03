import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert Prisma obj into a regular Js obj

export function convertToPlanObject<T>(value: T):T {
  return JSON.parse(JSON.stringify(value));
}
