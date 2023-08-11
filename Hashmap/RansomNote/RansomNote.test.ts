import canConstruct from "./RansomNote";

describe("Ransom Note", () => {
  it("returns true if note can be constucted from magazine", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
    expect(canConstruct("you", "myluopa")).toBe(true);
  });
  it("returns false if note cannot be constucted from magazine", () => {
    expect(canConstruct("aaa", "bbb")).toBe(false);
    expect(canConstruct("aaa", "aalbw")).toBe(false);
  });
});
