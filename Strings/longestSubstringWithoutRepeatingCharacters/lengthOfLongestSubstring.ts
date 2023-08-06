function lengthOfLongestSubstring(s: string): number {
  const stringLength = s.length;

  const doesCharExistMap = new Map<string, boolean>();

  let left = 0;
  let right = 1;

  let currentMax = 1;
  let max = 1;

  doesCharExistMap.set(s[left], true);

  while (right < stringLength) {
    if (doesCharExistMap.has(s[right])) {
      left = left + 1;
      right = left + 1;
      currentMax = 1;
      doesCharExistMap.clear();
      doesCharExistMap.set(s[left], true);
    } else {
      doesCharExistMap.set(s[right], true);
      right++;
      currentMax++;
      if (currentMax > max) max = currentMax;
    }
  }
  return max;
}
export default lengthOfLongestSubstring;
