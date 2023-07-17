import threeSum from "./threeSum";

describe("threeSum", () => {
  it("return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);

    expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  });
});
