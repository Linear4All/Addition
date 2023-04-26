// Add two matrices together
// Return value is the resulting matrix, return value is false if matrices are incompatible
function addition(matrix1, matrix2) {
    let row1 = matrix1.length
    let col1 = matrix1[0].length
    let row2 = matrix2.length
    let col2 = matrix2[0].length

    // Check that matrices are compatible
    if ((col1 != col2) || (row1 != row2)) {
        return false
    }

    // Create index variables and an empty result matrix
    let i, j, k;
    let result = new Array(row1);
    for (i = 0; i < row1; i++)
        result[i] = new Array(col1);

    // Insert values into result matrix
    for (i = 0; i < row1; i++) {
        for (j = 0; j < col1; j++) {
            result[i][j] = parseFloat(matrix1[i][j]) + parseFloat(matrix2[i][j]);
        }
    }

    // Return result matrix
    return result;
}