import { SortTypes } from "@/types/sorting";
import type { Line, Time } from "@/types/store";

export const SORT_FUNCTIONS_BY_NAME = {
  [SortTypes.ASC]: <T extends Line | Time = Line>(a: T, b: T): number =>
    a.name.localeCompare(b.name),
  [SortTypes.DESC]: <T extends Line | Time = Line>(a: T, b: T): number =>
    b.name.localeCompare(a.name),
};

export const sortItemsByNameField = <T extends Line | Time = Line>(
  items: T[] | undefined,
  order: SortTypes,
): T[] => (items ? [...items].sort(SORT_FUNCTIONS_BY_NAME[order]) : []);
