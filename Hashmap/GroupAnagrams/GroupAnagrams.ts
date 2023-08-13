function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>();

  strs.forEach((str) => {
    const str_Representation = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < str.length; i++) {
      str_Representation[str.charCodeAt(i) - 97]++;
    }
    let keyStr = str_Representation.toString();

    if (anagrams.has(keyStr)) anagrams.get(keyStr)?.push(str);
    else anagrams.set(keyStr, [str]);
  });

  return Array.from(anagrams.values());
}

export default groupAnagrams;
