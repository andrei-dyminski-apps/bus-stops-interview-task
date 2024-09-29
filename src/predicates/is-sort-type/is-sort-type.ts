import { SortTypes } from "@/types/sorting";

export const isSortType = (type: string): type is SortTypes => {
  return Object.values(SortTypes).includes(type as SortTypes);
};
