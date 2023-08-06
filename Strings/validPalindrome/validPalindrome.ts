function isPalindrome(s: string): boolean {
  const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = sanitizedString.length - 1;
  while (left < right) {
    if (sanitizedString[left] !== sanitizedString[right]) return false;
    right--;
    left++;
  }
  return true;
}

export default isPalindrome;
