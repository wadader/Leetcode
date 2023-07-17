function threeSum(nums: number[]): number[][] {
  const numsLength = nums.length;
  const threeSumResult: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLength; i++) {
    const shouldSkip = i > 0 && nums[i] === nums[i - 1];
    if (shouldSkip) continue;

    const target = -nums[i];

    let left = i + 1;
    let right = numsLength - 1;

    while (left < right) {
      const twoSumValue = nums[left] + nums[right];
      if (twoSumValue === target) {
        threeSumResult.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) left++;
      } else if (twoSumValue > target) right--;
      else if (twoSumValue < target) left++;
    }
  }

  return threeSumResult;
}

export default threeSum;
