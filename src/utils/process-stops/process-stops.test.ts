import { describe, it, expect } from "vitest";
import { processStops } from "./process-stops";
import type { Stop } from "@/types/store";

describe("processStops", () => {
  it("processes stops into StopItems with unique names", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "Stop1", time: "08:20" },
    ];
    const result = processStops(stops);
    expect(result).toEqual([
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ]);
  });

  it("returns an empty array when input is empty", () => {
    const stops: Stop[] = [];
    const result = processStops(stops);
    expect(result).toEqual([]);
  });

  it("returns the same array when all stops are unique", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "Stop3", time: "08:20" },
    ];
    const result = processStops(stops);
    expect(result).toEqual([
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
      { order: 3, name: "Stop3" },
    ]);
  });

  it("handles stops with empty names", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "", time: "08:20" },
    ];
    const result = processStops(stops);
    expect(result).toEqual([
      { order: 1, name: "" },
      { order: 2, name: "Stop2" },
    ]);
  });

  it("handles stops with the same order but different names", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 1, line: 1, stop: "Stop2", time: "08:10" },
    ];
    const result = processStops(stops);
    expect(result).toEqual([
      { order: 1, name: "Stop1" },
      { order: 1, name: "Stop2" },
    ]);
  });

  it("handles stops with the same name but different lines", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 2, stop: "Stop1", time: "08:10" },
    ];
    const result = processStops(stops);
    expect(result).toEqual([{ order: 1, name: "Stop1" }]);
  });
});
