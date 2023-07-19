import isPalindrome from "./validPalindrome";

describe("Valid Palindrome", () => {
  it("returns true for a valid palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("returns false for an invalid palindrome", () => {
    expect(isPalindrome("Dry stew")).toBe(false);
  });
});
