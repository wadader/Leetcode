function generateParenthesis(n: number): string[] {
  let allPars: string[] = [];

  function genP(open: number, closed: number, currentPars: string) {
    if (open === closed && closed === n) return allPars.push(currentPars);

    if (open > closed) genP(open, closed + 1, currentPars + ")");

    if (open < n) genP(open + 1, closed, currentPars + "(");
  }

  genP(0, 0, "");
  return allPars;
}

export default generateParenthesis;
