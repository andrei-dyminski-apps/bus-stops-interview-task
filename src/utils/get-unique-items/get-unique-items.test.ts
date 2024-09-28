import { describe, it, expect } from "vitest";
import { getUniqueItems } from "./get-unique-items";

describe("getUniqueItems", () => {
  it("returns unique items based on name property", () => {
    const items = [{ name: "item1" }, { name: "item2" }, { name: "item1" }];
    const result = getUniqueItems(items);
    expect(result).toEqual([{ name: "item1" }, { name: "item2" }]);
  });

  it("returns empty array when input is empty", () => {
    const items: { name: string }[] = [];
    const result = getUniqueItems(items);
    expect(result).toEqual([]);
  });

  it("returns the same array when all items are unique", () => {
    const items = [{ name: "item1" }, { name: "item2" }, { name: "item3" }];
    const result = getUniqueItems(items);
    expect(result).toEqual(items);
  });

  it("handles array with one item", () => {
    const items = [{ name: "item1" }];
    const result = getUniqueItems(items);
    expect(result).toEqual(items);
  });

  it("handles items with empty name", () => {
    const items = [{ name: "" }, { name: "item2" }, { name: "" }];
    const result = getUniqueItems(items);
    expect(result).toEqual([{ name: "" }, { name: "item2" }]);
  });
});
