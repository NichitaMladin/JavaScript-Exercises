// 3. Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
// sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ]) ➞ 6

// 2 + 4 = 6

let sumOfEvens = (matrix) => {
    let sumOfEvens = 0;

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] % 2 === 0){
                sumOfEvens = sumOfEvens + matrix[i][j];
            }
        }
    }

    return sumOfEvens;
}

    console.log(sumOfEvens([[1, 0, 2], [5, 5, 7], [9, 4, 3]]));
    console.log(sumOfEvens([[1, 0, 6], [5, 5, 2], [9, 4, 2]]));
    console.log(sumOfEvens([[1, 0, 6, 8], [5, 5, 2], [9, 4, 2, 3, 2]]));
    console.log(sumOfEvens([[1, 0, 6, 8], [5, 5, 2], [9, 4, 2, 3, 2], [2, 8, 1, 3]]));