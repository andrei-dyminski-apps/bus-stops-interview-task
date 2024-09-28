import { describe, it, expect } from "vitest";
import { completeTime } from "./complete-time";

describe("completeTime", () => {
  it("adds leading zero to single digit hour", () => {
    const result = completeTime("9:00");
    expect(result).toBe("09:00");
  });

  it("returns the same time if hour is already two digits", () => {
    const result = completeTime("14:00");
    expect(result).toBe("14:00");
  });

  it("throws error for invalid time format", () => {
    expect(() => completeTime("900")).toThrow("Invalid time format");
  });

  it("throws error for time length greater than 5", () => {
    expect(() => completeTime("123:456")).toThrow("Invalid time format");
  });

  it("throws error for time length less than 4", () => {
    expect(() => completeTime("1:2")).toThrow("Invalid time format");
  });

  it("throws error for missing colon separator", () => {
    expect(() => completeTime("1234")).toThrow("Invalid time format");
  });
});
