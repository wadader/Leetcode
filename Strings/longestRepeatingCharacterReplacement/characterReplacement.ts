function characterReplacement(s: string, k: number): number {
  const sLength = s.length;

  let left = 0;
  let right = 0;

  let charFreqMap: Record<string, number> = {};

  let maxCharacterFreq = 0;

  let max = 0;

  while (right < sLength) {
    const charAtRight = s[right];
    if (charFreqMap[charAtRight]) charFreqMap[charAtRight]++;
    else charFreqMap[charAtRight] = 1;

    if (charFreqMap[charAtRight] > maxCharacterFreq)
      maxCharacterFreq = charFreqMap[charAtRight];

    const numberOfReplacements = right - left + 1 - maxCharacterFreq;
    if (numberOfReplacements > k) {
      const charAtLeft = s[left];
      charFreqMap[charAtLeft]--;
      left++;
    }

    const windowLength = right - left + 1;
    if (windowLength > max) max = windowLength;

    right++;
  }

  return max;
}

export default characterReplacement;
