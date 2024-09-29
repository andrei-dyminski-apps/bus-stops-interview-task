import { describe, it, expect } from "vitest";
import { highlightQueryString } from "./highlight-query-string";

describe("highlightQueryString", () => {
  it("returns the original text when query is null", () => {
    const result = highlightQueryString("This is a test string", null);
    expect(result).toBe("This is a test string");
  });

  it("returns the original text when query is an empty string", () => {
    const result = highlightQueryString("This is a test string", "");
    expect(result).toBe("This is a test string");
  });

  it("highlights the query in the text", () => {
    const result = highlightQueryString("This is a test string", "test");
    expect(result).toBe('This is a <mark class="px-0">test</mark> string');
  });

  it("highlights the query case insensitively", () => {
    const result = highlightQueryString("This is a Test string", "test");
    expect(result).toBe('This is a <mark class="px-0">Test</mark> string');
  });

  it("highlights all occurrences of the query in the text", () => {
    const result = highlightQueryString("Test this test string", "test");
    expect(result).toBe(
      '<mark class="px-0">Test</mark> this <mark class="px-0">test</mark> string',
    );
  });

  it("escapes special characters in the query", () => {
    const result = highlightQueryString(
      "This is a test string with special characters *+?",
      "*+?",
    );
    expect(result).toBe(
      'This is a test string with special characters <mark class="px-0">*+?</mark>',
    );
  });
});
