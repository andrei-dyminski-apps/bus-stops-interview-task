import { describe, it, expect } from "vitest";
import { filterStopsByQuery } from "./filter-stops";
import type { StopItem } from "@/types/store";

describe("filterStopsByQuery", () => {
  it("returns all stops when query is null", () => {
    const stops: StopItem[] = [
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = filterStopsByQuery(stops, null);
    expect(result).toEqual(stops);
  });

  it("returns an empty array when stops is null", () => {
    const result = filterStopsByQuery(null, "Stop1");
    expect(result).toEqual([]);
  });

  it("returns stops that match the query", () => {
    const stops: StopItem[] = [
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = filterStopsByQuery(stops, "Stop1");
    expect(result).toEqual([{ order: 1, name: "Stop1" }]);
  });

  it("returns stops that match the query case insensitively", () => {
    const stops: StopItem[] = [
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = filterStopsByQuery(stops, "stop1");
    expect(result).toEqual([{ order: 1, name: "Stop1" }]);
  });

  it("returns an empty array when no stops match the query", () => {
    const stops: StopItem[] = [
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = filterStopsByQuery(stops, "Stop3");
    expect(result).toEqual([]);
  });

  it("returns all stops when query is an empty string", () => {
    const stops: StopItem[] = [
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = filterStopsByQuery(stops, "");
    expect(result).toEqual(stops);
  });
});
