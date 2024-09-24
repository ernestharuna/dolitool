import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = import.meta.env.BASE_URL ?? "http://localhost";

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhos:8000";