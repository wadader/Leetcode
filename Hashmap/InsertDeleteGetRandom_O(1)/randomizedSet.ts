class RandomizedSet {
  constructor() {}

  insert(val: number): boolean {
    const exists = this.internalMap.get(val);
    if (exists !== undefined) return false;

    this.internalMap.set(val, this.latestIndex);
    this.internalArray.push(val);
    this.latestIndex++;
    return true;
  }

  remove(val: number): boolean {
    const index = this.internalMap.get(val);
    if (index === undefined) return false;

    const arrayLastValue = this.internalArray[this.internalMap.size - 1];
    this.internalArray[index] = this.internalArray[this.internalMap.size - 1];
    this.internalMap.set(arrayLastValue, index);

    this.internalMap.delete(val);
    this.internalArray.pop();
    this.latestIndex--;
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.internalMap.size);
    const randomVal = this.internalArray[randomIndex];
    return randomVal;
  }

  private internalMap = new Map<number, number>();
  private internalArray: number[] = [];
  private latestIndex = 0;
}

export default RandomizedSet;
