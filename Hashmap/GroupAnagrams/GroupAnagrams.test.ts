import groupAnagrams from "./GroupAnagrams";

describe("Group Anagrams", () => {
  it("given an array of strings, groups anagram-strings together in an array of arrays", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
    expect(groupAnagrams(input)).toContainEqual;
  });
});
