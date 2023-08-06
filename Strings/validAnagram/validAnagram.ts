function isAnagram(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;

  if (sLength !== tLength) return false;

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < sLength; i++) {
    const sVal = s[i];
    const sFreq = sMap.get(sVal);
    if (sFreq) sMap.set(sVal, sFreq + 1);
    else sMap.set(sVal, 1);

    const tVal = t[i];
    const tFreq = tMap.get(tVal);
    if (tFreq) tMap.set(tVal, tFreq + 1);
    else tMap.set(tVal, 1);
  }

  for (const [s, sVal] of sMap) {
    const tVal = tMap.get(s);
    if (sVal !== tVal) return false;
  }

  return true;
}

export default isAnagram;
