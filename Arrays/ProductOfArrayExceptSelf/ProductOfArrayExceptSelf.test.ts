import productExceptSelf from "./ProductOfArrayExceptSelf";

describe("Product of Array Except Self", () => {
  it("answer[i] is equal to the product of all the elements of nums except nums[i]", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
});
