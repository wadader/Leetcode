import combine from "./combinations";

describe("Combinations", () => {
  it("generates combination from 1 -> n of length 2", () => {
    expect(combine(4, 2).sort()).toEqual(
      [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ].sort()
    );
    expect(combine(1, 1).sort()).toEqual([[1]].sort());
  });
});
