class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const value = this.lruMap.get(key);
    if (value === undefined) return -1;
    this.lruMap.delete(key);
    this.lruMap.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    this.lruMap.delete(key);
    this.lruMap.set(key, value);

    const size = this.lruMap.size;

    if (size > this.capacity) {
      const lruKey = this.lruMap.keys().next().value;
      this.lruMap.delete(lruKey);
    }
  }

  private lruMap = new Map<number, number>();
  private capacity: number;
}

export default LRUCache;
