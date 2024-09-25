import { sortItemsByNameField } from "@/utils/sort-items";
import { SortTypes } from "@/types/sorting";
import { completeTime } from "@/utils/complete-time";
import type { Line, LineObject, Stop } from "@/types/store";

export const prepareLinesFromStops = (stops: Stop[]): Line[] => {
  const items = Object.values(
    stops.reduce(
      (acc, { order, line, stop, time }) => {
        if (!acc[line]) {
          acc[line] = {
            name: line.toString(),
            stops: {
              [stop]: {
                order,
                name: stop,
                times: [{ name: completeTime(time) }],
              },
            },
          };
        } else {
          if (acc[line].stops[stop])
            acc[line].stops[stop].times.push({ name: completeTime(time) });
          else
            acc[line].stops[stop] = {
              order,
              name: stop,
              times: [{ name: completeTime(time) }],
            };
        }
        return acc;
      },
      {} as Record<number, LineObject>,
    ) ?? {},
  );

  return sortItemsByNameField(
    items.map(({ name, stops }) => ({
      name,
      stops: Object.values(stops).map(({ order, name, times }) => ({
        order,
        name,
        times,
      })),
    })),
    SortTypes.ASC,
  );
};