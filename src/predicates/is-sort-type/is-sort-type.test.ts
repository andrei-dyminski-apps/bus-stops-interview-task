import { describe, it, expect } from "vitest";
import { isSortType } from "./is-sort-type";

describe("isSortType", () => {
  it("returns true for valid SortTypes ASC", () => {
    const result = isSortType("asc");
    expect(result).toBe(true);
  });

  it("returns true for valid SortTypes DESC", () => {
    const result = isSortType("desc");
    expect(result).toBe(true);
  });

  it("returns false for invalid SortType", () => {
    const result = isSortType("invalid");
    expect(result).toBe(false);
  });

  it("returns false for empty string", () => {
    const result = isSortType("");
    expect(result).toBe(false);
  });
});
