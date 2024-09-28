import { describe, it, expect } from "vitest";
import { convertStringToKebabCase } from "./convert-string";

describe("convertStringToKebabCase", () => {
  it("converts camelCase to kebab-case", () => {
    const result = convertStringToKebabCase("camelCaseString");
    expect(result).toBe("camel-case-string");
  });

  it("converts spaces to hyphens", () => {
    const result = convertStringToKebabCase("string with spaces");
    expect(result).toBe("string-with-spaces");
  });

  it("removes special characters", () => {
    const result = convertStringToKebabCase("string@with#special$characters!");
    expect(result).toBe("string-with-special-characters-");
  });

  it("replaces multiple hyphens with a single hyphen", () => {
    const result = convertStringToKebabCase("string--with---multiple-hyphens");
    expect(result).toBe("string-with-multiple-hyphens");
  });

  it("converts uppercase letters to lowercase", () => {
    const result = convertStringToKebabCase("UPPERCASESTRING");
    expect(result).toBe("uppercasestring");
  });

  it("handles empty string", () => {
    const result = convertStringToKebabCase("");
    expect(result).toBe("");
  });

  it("handles string with only special characters", () => {
    const result = convertStringToKebabCase("!@#$%^&*()");
    expect(result).toBe("-");
  });
});
