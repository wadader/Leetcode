/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const matrixLength = matrix.length;
  let rowZeros: Map<number, true> = new Map<number, true>();
  let colZeros: Map<number, true> = new Map<number, true>();

  for (let i = 0; i < matrixLength; i++) {
    const rowLength = matrix[i].length;
    for (let j = 0; j < rowLength; j++) {
      if (matrix[i][j] === 0) {
        rowZeros.set(i, true);
        colZeros.set(j, true);
      }
    }
  }

  for (let i = 0; i < matrixLength; i++) {
    const rowLength = matrix[i].length;
    for (let j = 0; j < rowLength; j++) {
      let isInZeroRowOrCol = rowZeros.get(i) || colZeros.get(j);
      if (isInZeroRowOrCol) matrix[i][j] = 0;
    }
  }
}

export default setZeroes;
