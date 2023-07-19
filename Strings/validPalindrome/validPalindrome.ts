function isPalindrome(s: string): boolean {
  let processedString = s.trim();
  const regexPattern = /[^A-Za-z0-9]/g;
  processedString = processedString.replace(regexPattern, "");
  processedString = processedString.toLowerCase();

  const stringLength = processedString.length;

  for (let i = 0; i < stringLength; i++) {
    const rightPointer = stringLength - 1 - i;
    const leftPointer = i;

    if (rightPointer === leftPointer) break;

    if (processedString[rightPointer] !== processedString[leftPointer])
      return false;
  }
  return true;
}

function isAlphanumeric(code: number) {
  // digits: 48-57
  // lowercase letters: 97-122
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

export default isPalindrome;
