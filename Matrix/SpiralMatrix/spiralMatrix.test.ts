import spiralOrder from "./spiralMatrix";

describe("Spiral Matrix", () => {
  it("Given an m x n matrix, return all elements of the matrix in spiral order", () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ])
    ).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);

    expect(spiralOrder([[3], [2]])).toStrictEqual([3, 2]);
  });
});
