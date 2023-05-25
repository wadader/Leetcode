function maxProduct(nums: number[]): number {
    let maxVal = Math.max(...nums);
    let currentMax = nums[0];
    let currentMin = nums[0];
  
    const numsArrLength = nums.length;
  
    for (let i = 1; i < numsArrLength; i++) {
      const productWithMax = nums[i] * currentMax;
      const productWithMin = nums[i] * currentMin;
  
      currentMax = Math.max(productWithMax, productWithMin, nums[i]);
      currentMin = Math.min(productWithMax, productWithMin, nums[i]);
      maxVal = Math.max(currentMax,maxVal);
    }
    return maxVal;
  }
  