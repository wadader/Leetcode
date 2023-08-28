function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = (low + high) / 2;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    const midVal = nums[mid];

    if (midVal === target) return mid;
    if (midVal > target) high = mid - 1;
    if (midVal < target) low = mid + 1;
  }
  return -1;
}

export default binarySearch;
