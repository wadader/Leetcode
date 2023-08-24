import generateParenthesis from "./generateParentheses";

describe("Generate Parenthesis", () => {
  it("generates all combinations of well-formed parenthesis", () => {
    expect(generateParenthesis(3).sort()).toEqual(
      ["((()))", "(()())", "(())()", "()(())", "()()()"].sort()
    );
  });
  expect(generateParenthesis(1)).toStrictEqual(["()"]);
});
