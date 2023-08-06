import isAnagram from "./validAnagram";

describe.only("is Anagram", () => {
  it("returns valid anagram as true", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("schoolmaster", "theclassroom")).toBe(true);
  });
  it("returns invalid anagrams as false", () => {
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("polka", "dot")).toBe(false);
    expect(isAnagram("king", "kingg")).toBe(false);
    expect(isAnagram("aacc", "ccac")).toBe(false);
  });
});
