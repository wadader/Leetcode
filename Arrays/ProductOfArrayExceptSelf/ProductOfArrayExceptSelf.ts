function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;

  const productsToLeft = [1, nums[0]];

  for (let i = 2; i < numsLength; i++) {
    productsToLeft[i] = nums[i - 1] * productsToLeft[i - 1];
  }

  const productsToRight = [];
  productsToRight[numsLength - 1] = 1;
  productsToRight[numsLength - 2] = nums[numsLength - 1];

  for (let i = numsLength - 3; i >= 0; i--) {
    productsToRight[i] = nums[i + 1] * productsToRight[i + 1];
  }

  const productsArr = [];
  for (let i = 0; i < numsLength; i++) {
    productsArr[i] = productsToRight[i] * productsToLeft[i];
  }

  return productsArr;
}

export default productExceptSelf;
