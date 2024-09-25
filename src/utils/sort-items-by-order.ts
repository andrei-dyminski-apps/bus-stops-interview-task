import { SortTypes } from "@/types/sorting";
import type { Stop } from "@/types/store";

export const SORT_FUNCTIONS_BY_ORDER = {
  [SortTypes.ASC]: <T extends Stop = Stop>(a: T, b: T): number =>
    a.order - b.order,
  [SortTypes.DESC]: <T extends Stop = Stop>(a: T, b: T): number =>
    b.order - a.order,
};

export const sortItemsByOrderField = <T extends Stop = Stop>(
  items: T[] | undefined,
  order: SortTypes,
): T[] => (items ? [...items].sort(SORT_FUNCTIONS_BY_ORDER[order]) : []);
