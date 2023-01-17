function solve(matrix) {
    let sumRow = 0;
    let sumCol = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentArr = matrix[row].join('');
        for (let col = 0; col < currentArr.length; col++) {
            sumRow += Number(currentArr[col]);
            sumCol += Number(currentArr[0]);
        }
    }

    if (sumRow === sumCol) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve ([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]);

solve ([[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]);

solve ([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]);