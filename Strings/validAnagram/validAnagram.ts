function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const stringsLength = s.length;

  const sCount: { [index: string]: number } = {};
  const tCount: { [index: string]: number } = {};

  for (let i = 0; i < stringsLength; i++) {
    sCount[s[i]] ? sCount[s[i]]++ : (sCount[s[i]] = 1);
    tCount[t[i]] ? tCount[t[i]]++ : (tCount[t[i]] = 1);
  }

  let sCharFrequencies = Object.keys(sCount);
  for (let i = 0; i < stringsLength; i++) {
    const sCharFreq = sCount[sCharFrequencies[i]];
    const tCharFreq = tCount[sCharFrequencies[i]];

    if (sCharFreq !== tCharFreq) return false;
  }

  return true;
}

export default isAnagram;
