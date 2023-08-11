import LRUCache from "./LRUCache";

describe("LRU Cache is correctly implemented", () => {
  it("returns set value correctly", () => {
    const cache = new LRUCache(2);
    cache.put(2, 6);
    cache.put(1, 5);
    cache.put(1, 2);
    const valKeyOne = cache.get(1);
    const valKeyTwo = cache.get(2);
    expect({ valKeyOne, valKeyTwo }).toEqual({ valKeyOne: 2, valKeyTwo: 6 });
  });

  it("returns set value correctly", () => {
    const cache = new LRUCache(2);
    cache.put(2, 1);
    cache.put(1, 1);
    cache.put(2, 3);
    cache.put(4, 1);
    const valKeyOne = cache.get(1);
    const valKeyTwo = cache.get(2);
    expect({ valKeyOne, valKeyTwo }).toEqual({ valKeyOne: -1, valKeyTwo: 3 });
  });
});
