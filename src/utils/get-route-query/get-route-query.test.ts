import { describe, it, expect } from "vitest";
import { getRouteQuery } from "./get-route-query";
import type { LocationQueryValue } from "vue-router";

describe("getRouteQuery", () => {
  it("returns the first element when input is an array", () => {
    const value: LocationQueryValue[] = ["param1", "param2"];
    const result = getRouteQuery(value);
    expect(result).toBe("param1");
  });

  it("returns the value itself when input is a string", () => {
    const value: LocationQueryValue = "param1";
    const result = getRouteQuery(value);
    expect(result).toBe("param1");
  });

  it("returns null when input is an empty array", () => {
    const value: LocationQueryValue[] = [];
    const result = getRouteQuery(value);
    expect(result).toBeNull();
  });

  it("returns null when input is null", () => {
    const value: LocationQueryValue = null;
    const result = getRouteQuery(value);
    expect(result).toBeNull();
  });
});
