function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;

  const sLength = s.length;

  let charFreqMap: Record<string, number> = {};

  let maxFreq = 0;
  let maxLengthPossible = 0;

  while (right < sLength) {
    const charAtRight = s[right];
    if (charFreqMap[charAtRight]) charFreqMap[charAtRight]++;
    else charFreqMap[charAtRight] = 1;

    if (charFreqMap[charAtRight] > maxFreq) maxFreq = charFreqMap[charAtRight];

    let windowLength = right - left + 1;

    if (windowLength - maxFreq > k) {
      charFreqMap[s[left]]--;
      left = left + 1;
      windowLength--;
    }

    if (windowLength > maxLengthPossible) maxLengthPossible = windowLength;
    right++;
  }
  return maxLengthPossible;
}

