function combine(n: number, k: number): number[][] {
  const validCombinations: number[][] = [];

  function backtrack(start: number, currentCombination: number[]) {
    if (currentCombination.length === k) {
      validCombinations.push([...currentCombination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      currentCombination.push(i);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  backtrack(1, []);

  return validCombinations;
}

export default combine;
