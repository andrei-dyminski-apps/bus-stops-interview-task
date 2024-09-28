import { SortTypes } from "@/types/sorting";
import type { LineItem, Time } from "@/types/store";

export const SORT_FUNCTIONS_BY_NAME = {
  [SortTypes.ASC]: <T extends LineItem | Time = LineItem>(a: T, b: T): number =>
    a.name.localeCompare(b.name),
  [SortTypes.DESC]: <T extends LineItem | Time = LineItem>(
    a: T,
    b: T,
  ): number => b.name.localeCompare(a.name),
};

export const sortItemsByNameProp = <T extends LineItem | Time = LineItem>(
  items: T[] | undefined,
  order: SortTypes,
): T[] => (items ? [...items].sort(SORT_FUNCTIONS_BY_NAME[order]) : []);
