export const getUniqueItems = <T extends { name: string }>(items: T[]): T[] =>
  Array.from(new Map(items.map((item) => [item.name, item])).values());
