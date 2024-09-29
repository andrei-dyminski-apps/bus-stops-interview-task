import { describe, it, expect } from "vitest";
import { sortItemsByOrderProp } from "./sort-items-by-order";
import { SortTypes } from "@/types/sorting";
import type { LineStop, StopItem } from "@/types/store";

describe("sortItemsByOrderField", () => {
  it("sorts LineStop items in ascending order by order prop", () => {
    const items: LineStop[] = [
      { order: 3, name: "Stop3", times: [] },
      { order: 1, name: "Stop1", times: [] },
      { order: 2, name: "Stop2", times: [] },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { order: 1, name: "Stop1", times: [] },
      { order: 2, name: "Stop2", times: [] },
      { order: 3, name: "Stop3", times: [] },
    ]);
  });

  it("sorts LineStop items in descending order by order prop", () => {
    const items: LineStop[] = [
      { order: 3, name: "Stop3", times: [] },
      { order: 1, name: "Stop1", times: [] },
      { order: 2, name: "Stop2", times: [] },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.DESC);
    expect(result).toEqual([
      { order: 3, name: "Stop3", times: [] },
      { order: 2, name: "Stop2", times: [] },
      { order: 1, name: "Stop1", times: [] },
    ]);
  });

  it("sorts StopItem items in ascending order by order prop", () => {
    const items: StopItem[] = [
      { order: 3, name: "Stop3" },
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
      { order: 3, name: "Stop3" },
    ]);
  });

  it("sorts StopItem items in descending order by order prop", () => {
    const items: StopItem[] = [
      { order: 3, name: "Stop3" },
      { order: 1, name: "Stop1" },
      { order: 2, name: "Stop2" },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.DESC);
    expect(result).toEqual([
      { order: 3, name: "Stop3" },
      { order: 2, name: "Stop2" },
      { order: 1, name: "Stop1" },
    ]);
  });

  it("returns an empty array when input is undefined", () => {
    const result = sortItemsByOrderProp(undefined, SortTypes.ASC);
    expect(result).toEqual([]);
  });

  it("returns an empty array when input is an empty array", () => {
    const result = sortItemsByOrderProp([], SortTypes.ASC);
    expect(result).toEqual([]);
  });

  it("handles items with negative order values", () => {
    const items: StopItem[] = [
      { order: -1, name: "Stop1" },
      { order: -3, name: "Stop3" },
      { order: -2, name: "Stop2" },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { order: -3, name: "Stop3" },
      { order: -2, name: "Stop2" },
      { order: -1, name: "Stop1" },
    ]);
  });

  it("handles items with mixed positive and negative order values", () => {
    const items: StopItem[] = [
      { order: -1, name: "Stop1" },
      { order: 2, name: "Stop2" },
      { order: 0, name: "Stop3" },
    ];
    const result = sortItemsByOrderProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { order: -1, name: "Stop1" },
      { order: 0, name: "Stop3" },
      { order: 2, name: "Stop2" },
    ]);
  });
});
