function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineCharFreq = new Map<string, number>();

  const noteLength = ransomNote.length;
  const magazineLength = magazine.length;

  for (let i = 0; i < magazineLength; i++) {
    const char = magazine[i];
    const freq = magazineCharFreq.get(char);
    if (freq) magazineCharFreq.set(char, freq + 1);
    else magazineCharFreq.set(char, 1);
  }

  for (let i = 0; i < noteLength; i++) {
    const noteChar = ransomNote[i];

    const mFreq = magazineCharFreq.get(noteChar);

    if (!mFreq) return false;
    else magazineCharFreq.set(noteChar, mFreq - 1);
  }

  return true;
}

export default canConstruct;
