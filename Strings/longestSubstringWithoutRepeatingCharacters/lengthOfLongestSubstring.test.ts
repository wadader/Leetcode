import lengthOfLongestSubstring from "./lengthOfLongestSubstring";

describe("Longest Substring Without Repeating Characters", () => {
  it("get the length of longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3); // abc bca cab
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1); // b
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3); // wke kew
    expect(lengthOfLongestSubstring("pwwkewabcde")).toBe(7); // kewabcd
    expect(lengthOfLongestSubstring("aab")).toBe(2); // ab
  });
});
