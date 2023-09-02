function spiralOrder(matrix: number[][]): number[] {
  const matrixLength = matrix.length;
  const rowLength = matrix[0].length;

  const totalEntries = matrixLength * rowLength;

  const spiralledValues: number[] = [];

  let i = 0;

  while (spiralledValues.length < totalEntries) {
    // 1 left-to-right
    for (let j = i; j < rowLength - i; j++) spiralledValues.push(matrix[i][j]);

    // 2. top-to-bottom
    for (let i_i = i + 1; i_i < matrixLength - i; i_i++)
      spiralledValues.push(matrix[i_i][rowLength - 1 - i]);

    if (totalEntries === spiralledValues.length) break;

    // 3. right-to-left
    for (let j_rev = rowLength - i - 2; j_rev > i; j_rev--) {
      spiralledValues.push(matrix[matrixLength - 1 - i][j_rev]);
    }

    if (totalEntries === spiralledValues.length) break;

    // 4. bottom-to-top
    for (let i_i_rev = matrixLength - i - 1; i_i_rev > i; i_i_rev--)
      spiralledValues.push(matrix[i_i_rev][i]);

    i++;
  }

  return spiralledValues;
}

export default spiralOrder;
