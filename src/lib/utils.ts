import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs: (string | number | null | boolean | undefined)[]) {
  return twMerge(clsx(inputs));
}
