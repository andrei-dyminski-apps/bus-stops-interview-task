import { describe, it, expect } from "vitest";
import { sortItemsByNameProp } from "./sort-items-by-name";
import { SortTypes } from "@/types/sorting";
import type { LineItem, Time } from "@/types/store";

describe("sortItemsByNameProp", () => {
  it("sorts LineItems in ascending order by name", () => {
    const items: LineItem[] = [
      { name: "B", stops: [] },
      { name: "A", stops: [] },
      { name: "C", stops: [] },
    ];
    const result = sortItemsByNameProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { name: "A", stops: [] },
      { name: "B", stops: [] },
      { name: "C", stops: [] },
    ]);
  });

  it("sorts LineItems in descending order by name", () => {
    const items: LineItem[] = [
      { name: "B", stops: [] },
      { name: "A", stops: [] },
      { name: "C", stops: [] },
    ];
    const result = sortItemsByNameProp(items, SortTypes.DESC);
    expect(result).toEqual([
      { name: "C", stops: [] },
      { name: "B", stops: [] },
      { name: "A", stops: [] },
    ]);
  });

  it("sorts Time items in ascending order by name", () => {
    const items: Time[] = [
      { name: "12:00" },
      { name: "08:00" },
      { name: "10:00" },
    ];
    const result = sortItemsByNameProp(items, SortTypes.ASC);
    expect(result).toEqual([
      { name: "08:00" },
      { name: "10:00" },
      { name: "12:00" },
    ]);
  });

  it("sorts Time items in descending order by name", () => {
    const items: Time[] = [
      { name: "12:00" },
      { name: "08:00" },
      { name: "10:00" },
    ];
    const result = sortItemsByNameProp(items, SortTypes.DESC);
    expect(result).toEqual([
      { name: "12:00" },
      { name: "10:00" },
      { name: "08:00" },
    ]);
  });

  it("returns an empty array when input is undefined", () => {
    const result = sortItemsByNameProp(undefined, SortTypes.ASC);
    expect(result).toEqual([]);
  });

  it("returns an empty array when input is an empty array", () => {
    const result = sortItemsByNameProp([], SortTypes.ASC);
    expect(result).toEqual([]);
  });
});
