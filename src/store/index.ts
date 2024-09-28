import { getStops } from "@/api/lines";
import {
  GET_LINE_GETTER,
  GET_STOP_GETTER,
  GET_STOPS_ACTION,
  SET_LINES_MUTATION,
  SET_STOPS_MUTATION,
} from "@/constants/store";
import { prepareLinesFromStops } from "@/utils/process-store";
import { convertStringToKebabCase } from "@/utils/convert-string";
import { processStops } from "@/utils/process-stops";
import { createStore, type Store } from "vuex";
import type { InjectionKey } from "vue";
import type { LineItem, LineStop, RootState, Stop } from "@/types/store";

export const STORE_KEY: InjectionKey<Store<RootState>> = Symbol();

export default createStore<RootState>({
  state() {
    return {
      stops: null,
      lines: null,
    };
  },
  getters: {
    [GET_LINE_GETTER]:
      (state) =>
      (line: string): LineItem | null =>
        state.lines?.find(({ name }) => name === line) ?? null,
    [GET_STOP_GETTER]:
      (_, getters) =>
      (line: string, stop: string): LineItem | null =>
        getters[GET_LINE_GETTER](line)?.stops.find(
          ({ name }: LineStop) => convertStringToKebabCase(name) === stop,
        ) ?? null,
  },
  mutations: {
    [SET_STOPS_MUTATION](state, stops) {
      state.stops = processStops(stops);
    },
    [SET_LINES_MUTATION](state, stops: Stop[]) {
      state.lines = prepareLinesFromStops(stops);
    },
  },
  actions: {
    async [GET_STOPS_ACTION]({ state, commit }) {
      try {
        if (state.stops) return;
        const data = await getStops();
        commit(SET_STOPS_MUTATION, data);
        commit(SET_LINES_MUTATION, data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
