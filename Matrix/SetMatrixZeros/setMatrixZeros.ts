/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const matrixLength = matrix.length;

  let shouldZeroFirstRow = false;

  matrix[0].forEach((val) => {
    if (val === 0) shouldZeroFirstRow = true;
  });

  for (let i = 1; i < matrixLength; i++) {
    const rowLength = matrix[i].length;
    for (let j = 0; j < rowLength; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < matrixLength; i++) {
    const rowLength = matrix[i].length;
    for (let j = 1; j < rowLength; j++) {
      let isInZeroRowOrCol = matrix[i][0] === 0 || matrix[0][j] === 0;
      if (isInZeroRowOrCol) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    matrix.forEach((val) => (val[0] = 0));
  }

  if (shouldZeroFirstRow) {
    matrix[0].forEach((val, index) => (matrix[0][index] = 0));
  }
}

export default setZeroes;
