import type { Stop, StopItem } from "@/types/store";

export const processStops = (stops: Stop[]): StopItem[] =>
  Object.values(
    stops.reduce(
      (acc, { order, stop }) => {
        if (!acc[stop]) acc[stop] = { order, name: stop };
        return acc;
      },
      {} as Record<string, StopItem>,
    ),
  );
