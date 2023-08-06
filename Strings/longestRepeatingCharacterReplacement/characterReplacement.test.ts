import characterReplacement from "./characterReplacement";

describe("Longest Repeating Character Replacement", () => {
  it("get length of longest substring of consecutive characters achievable by character substituion", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
    expect(characterReplacement("AABABBA", 1)).toBe(4);
    expect(characterReplacement("CABBB", 2)).toBe(5);
    expect(characterReplacement("ABBB", 2)).toBe(4);
    expect(characterReplacement("ABAA", 0)).toBe(2);
  });
});
