import searchInRotatedArray from "./searchRotatedSortedArray";
describe("searchInRotatedArray", () => {
  it("returns the index of the target in a rotated array", () => {
    expect(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchInRotatedArray([4, 5, 6, 7, 8, 9, 1, 2, 3], 3)).toBe(8);
  });

  it("returns -1 if the target does not exist in the array", () => {
    expect(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(searchInRotatedArray([4, 5, 6, 7, 8, 9, 1, 2, 3], 10)).toBe(-1);
  });

  it("returns the index of the target in a non-rotated sorted array", () => {
    expect(searchInRotatedArray([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(searchInRotatedArray([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("works with array of one element", () => {
    expect(searchInRotatedArray([1], 1)).toBe(0);
    expect(searchInRotatedArray([1], 2)).toBe(-1);
  });
});
