type ClassValue = string | false | null | undefined;

/** Joins conditional class names into a single className string. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
