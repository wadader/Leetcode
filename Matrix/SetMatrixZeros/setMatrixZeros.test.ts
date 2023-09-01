import setZeroes from "./setMatrixZeros";

describe("setZeroes", () => {
  it("sets columns and rows to zero where element is 0", () => {
    {
      const input = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ];
      setZeroes(input);
      expect(input).toStrictEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ]);
    }
    {
      const input = [
        [1, 2, 3, 4],
        [5, 0, 7, 8],
        [0, 10, 11, 12],
        [13, 14, 15, 0],
      ];
      setZeroes(input);
      expect(input).toStrictEqual([
        [0, 0, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
    }
  });
});
