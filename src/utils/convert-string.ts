export const convertStringToKebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "-")
    .toLowerCase();
