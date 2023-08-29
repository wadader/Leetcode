function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((high + low) / 2);

  while (low <= high) {
    mid = Math.ceil((high + low) / 2);

    const midVal = nums[mid];

    if (midVal === target) return mid;

    if (nums[low] < midVal) {
      // left portion
      if (target > midVal || target < nums[low]) low = mid + 1;
      else high = mid - 1;
    } else {
      // right portion
      if (target < midVal || target > nums[high]) high = mid - 1;
      else low = mid + 1;
    }
  }

  return -1;
}

export default search;
