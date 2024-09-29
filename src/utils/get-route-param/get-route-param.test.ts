import { describe, it, expect } from "vitest";
import { getRouteParam } from "./get-route-param";

describe("getRouteParamValue", () => {
  it("returns the first element when input is an array", () => {
    const value = ["param1", "param2"];
    const result = getRouteParam(value);
    expect(result).toBe("param1");
  });

  it("returns the value itself when input is a string", () => {
    const value = "param1";
    const result = getRouteParam(value);
    expect(result).toBe("param1");
  });

  it("returns an undefined when input is undefined", () => {
    const value = undefined;
    const result = getRouteParam(value);
    expect(result).toBeUndefined();
  });
});
