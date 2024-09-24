import { createStore } from "vuex";
import { getStops } from "@/api/lines";
import { LineObject, RootState, Stop } from "@/types/store";
import {
  GET_STOPS_ACTION,
  SET_LINES_MUTATION,
  SET_STOPS_MUTATION,
} from "@/constants/store";

export default createStore<RootState>({
  state() {
    return {
      stops: null,
      lines: null,
    };
  },
  getters: {},
  mutations: {
    [SET_STOPS_MUTATION](state, stops) {
      state.stops = stops;
    },
    [SET_LINES_MUTATION](state, stops: Stop[]) {
      state.lines = Object.values(
        stops.reduce(
          (acc, stop) => {
            if (!acc[stop.line]) {
              acc[stop.line] = {
                line: stop.line,
                order: stop.order,
                stops: { [stop.stop]: { stop: stop.stop, times: [stop.time] } },
              };
            } else {
              if (acc[stop.line].stops[stop.stop])
                acc[stop.line].stops[stop.stop].times.push(stop.time);
              else
                acc[stop.line].stops[stop.stop] = {
                  stop: stop.stop,
                  times: [stop.time],
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
            .map(({ stop, times }) => ({
              stop,
              times: times.sort((a, b) => a.localeCompare(b)),
            }))
            .sort((a, b) => a.stop.localeCompare(b.stop)),
        }))
        .sort((a, b) => a.line - b.line);
    },
  },
  actions: {
    async [GET_STOPS_ACTION]({ state, commit }) {
      try {
        if (state.stops) return;
        const response = await getStops();
        commit(SET_STOPS_MUTATION, response.data);
        commit(SET_LINES_MUTATION, response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
