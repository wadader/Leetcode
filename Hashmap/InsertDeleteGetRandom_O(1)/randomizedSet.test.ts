import RandomizedSet from "./randomizedSet";

describe("Insert, Delete, Get Random O(1)", () => {
  it("inserts, and removes with correct returns", () => {
    const randomizedSet = new RandomizedSet();
    const resultsArray: boolean[] = [];

    resultsArray.push(randomizedSet.insert(1));
    resultsArray.push(randomizedSet.remove(2));
    resultsArray.push(randomizedSet.insert(2));
    resultsArray.push(randomizedSet.remove(1));
    resultsArray.push(randomizedSet.insert(2));

    expect(resultsArray).toStrictEqual([true, false, true, true, false]);
  });
});
