import type { StopItem } from "@/types/store";

export const filterStopsByQuery = (
  stops: StopItem[] | null,
  query: string | null,
): StopItem[] => {
  if (!stops) return [];
  if (!query) return stops;
  return stops?.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase()),
  );
};
