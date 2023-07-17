import twoSum2 from "./TwoSum2";

describe("twoSum2", () => {
  it("returns an tuple containing the index + 1 of the values matching the target ", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
    expect(twoSum2([2, 3, 4], 6)).toStrictEqual([1, 3]);
    expect(twoSum2([-9, -2, -1, 0, 4, 11], -1)).toStrictEqual([3, 4]);
  });
  it(`should throw "no twoSum found" when no sum meeting target exists`, () => {
    expect(() => {
      twoSum2([2, 7, 11, 15], 8);
    }).toThrow("no twoSum found");

    expect(() => {
      twoSum2([-3, -2, 21, 41], 41);
    }).toThrow("no twoSum found");
  });
});
