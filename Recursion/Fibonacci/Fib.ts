function fib(n: number): number {
  if (n < 0) throw "cannot be negative number";

  if (n === 0) return 0;
  if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

export default fib;
