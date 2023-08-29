function binarySearch(nums: number[], target: number): number {
  function binarySearchRecursive(low: number, high: number): number {
    const mid = Math.floor((high + low) / 2);
    const midVal = nums[mid];

    if (midVal === target) return mid;
    if (low === high) return -1;
    if (midVal > target) return binarySearchRecursive(low, mid - 1);
    if (midVal < target) return binarySearchRecursive(mid + 1, high);

    return -1;
  }

  return binarySearchRecursive(0, nums.length - 1);
}

export default binarySearch;
