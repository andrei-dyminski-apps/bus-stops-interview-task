import { describe, it, expect } from "vitest";
import { prepareLinesFromStops } from "./prepare-lines";
import type { Stop, LineItem } from "@/types/store";

describe("prepareLinesFromStops", () => {
  it("processes stops into LineItems with unique stops and times", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "Stop1", time: "08:20" },
    ];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([
      {
        name: "1",
        stops: [
          {
            order: 1,
            name: "Stop1",
            times: [{ name: "08:00" }, { name: "08:20" }],
          },
          { order: 2, name: "Stop2", times: [{ name: "08:10" }] },
        ],
      },
    ]);
  });

  it("returns an empty array when input is empty", () => {
    const stops: Stop[] = [];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([]);
  });

  it("returns the same array when all stops are unique", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "Stop3", time: "08:20" },
    ];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([
      {
        name: "1",
        stops: [
          { order: 1, name: "Stop1", times: [{ name: "08:00" }] },
          { order: 2, name: "Stop2", times: [{ name: "08:10" }] },
          { order: 3, name: "Stop3", times: [{ name: "08:20" }] },
        ],
      },
    ]);
  });

  it("handles stops with empty names", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "", time: "08:00" },
      { order: 2, line: 1, stop: "Stop2", time: "08:10" },
      { order: 3, line: 1, stop: "", time: "08:20" },
    ];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([
      {
        name: "1",
        stops: [
          { order: 1, name: "", times: [{ name: "08:00" }, { name: "08:20" }] },
          { order: 2, name: "Stop2", times: [{ name: "08:10" }] },
        ],
      },
    ]);
  });

  it("handles stops with the same order but different names", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 1, line: 1, stop: "Stop2", time: "08:10" },
    ];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([
      {
        name: "1",
        stops: [
          { order: 1, name: "Stop1", times: [{ name: "08:00" }] },
          { order: 1, name: "Stop2", times: [{ name: "08:10" }] },
        ],
      },
    ]);
  });

  it("handles stops with the same name but different lines", () => {
    const stops: Stop[] = [
      { order: 1, line: 1, stop: "Stop1", time: "08:00" },
      { order: 2, line: 2, stop: "Stop1", time: "08:10" },
    ];
    const result: LineItem[] = prepareLinesFromStops(stops);
    expect(result).toEqual([
      {
        name: "1",
        stops: [{ order: 1, name: "Stop1", times: [{ name: "08:00" }] }],
      },
      {
        name: "2",
        stops: [{ order: 2, name: "Stop1", times: [{ name: "08:10" }] }],
      },
    ]);
  });
});
