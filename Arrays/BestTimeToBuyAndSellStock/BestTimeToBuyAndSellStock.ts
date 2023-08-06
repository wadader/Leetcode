function maxProfit(prices: number[]): number {
  const pricesLength = prices.length;
  let maxProfit = 0;
  let lowestPrice = Infinity;
  for (let i = 0; i < pricesLength; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
      continue;
    }
    const todaysProfit = prices[i] - lowestPrice;
    if (todaysProfit > maxProfit) maxProfit = todaysProfit;
  }
  return maxProfit;
}

export default maxProfit;
