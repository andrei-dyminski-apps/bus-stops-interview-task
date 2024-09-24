import type { Line, LineObject, Stop } from "@/types/store";

export const prepareLinesFromStops = (stops: Stop[]): Line[] =>
  Object.values(
    stops.reduce(
      (acc, { order, line, stop, time }) => {
        if (!acc[line]) {
          acc[line] = {
            line,
            order,
            stops: { [stop]: { order, stop, times: [{ order, time }] } },
          };
        } else {
          if (acc[line].stops[stop])
            acc[line].stops[stop].times.push({ order, time });
          else
            acc[line].stops[stop] = {
              order,
              stop,
              times: [{ order, time }],
            };
        }
        return acc;
      },
      {} as Record<number, LineObject>,
    ) ?? {},
  )
    .map(({ line, order, stops }) => ({
      line,
      order,
      stops: Object.values(stops)
        .map(({ order, stop, times }) => ({
          order,
          stop,
          times: times.sort((a, b) => a.order - b.order),
        }))
        .sort((a, b) => a.order - b.order),
    }))
    .sort((a, b) => a.order - b.order);
