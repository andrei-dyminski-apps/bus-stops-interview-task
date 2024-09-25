import { SortTypes } from "@/types/sorting";
import type { Line, Stop, Time } from "@/types/store";

export const SORT_FUNCTIONS_BY_ORDER = {
  [SortTypes.ASC]: <T extends Stop = Stop>(a: T, b: T): number =>
    a.order - b.order,
  [SortTypes.DESC]: <T extends Stop = Stop>(a: T, b: T): number =>
    b.order - a.order,
};

export const SORT_FUNCTIONS_BY_NAME = {
  [SortTypes.ASC]: <T extends Line | Time = Line>(a: T, b: T): number =>
    a.name.localeCompare(b.name),
  [SortTypes.DESC]: <T extends Line | Time = Line>(a: T, b: T): number =>
    b.name.localeCompare(a.name),
};

export const sortItemsByOrderField = <T extends Stop = Stop>(
  items: T[] | undefined,
  order: SortTypes,
): T[] => (items ? [...items].sort(SORT_FUNCTIONS_BY_ORDER[order]) : []);

export const sortItemsByNameField = <T extends Line | Time = Line>(
  items: T[] | undefined,
  order: SortTypes,
): T[] => (items ? [...items].sort(SORT_FUNCTIONS_BY_NAME[order]) : []);
