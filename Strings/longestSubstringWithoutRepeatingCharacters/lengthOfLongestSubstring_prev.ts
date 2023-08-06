function lengthOfLongestSubstring_v1(s: string): number {
  const stringLength = s.length;

  const charPositionInStringMap = new Map<string, number>();

  let longestLength = 0;
  let currentLength = 0;

  let i = 0;
  while (i < stringLength) {
    const charPositionInString = charPositionInStringMap.get(s[i]);
    if (charPositionInString !== undefined) {
      currentLength = 0;
      i = charPositionInString + 1;
      charPositionInStringMap.clear();
    }
    charPositionInStringMap.set(s[i], i);
    currentLength++;

    if (currentLength > longestLength) longestLength = currentLength;
    i++;
  }

  return longestLength;
}

function lengthOfLongestSubstring_v2(s: string): number {
  const stringLength = s.length;
  if (stringLength === 0) return 0;

  let left = 0;
  let right = 1;

  let currentMax = 1;
  let max = 1;

  const isCharRepeating = new Map<string, boolean>();

  isCharRepeating.set(s[left], true);

  while (right < stringLength) {
    let rightVal = s[right];
    if (isCharRepeating.get(rightVal)) {
      currentMax = 1;
      left++;
      right = left + 1;
      isCharRepeating.clear();
      isCharRepeating.set(s[left], true);
    } else {
      isCharRepeating.set(rightVal, true);
      right++;
      currentMax++;
      if (currentMax > max) max = currentMax;
    }
  }
  return max;
}
