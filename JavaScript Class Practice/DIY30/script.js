const maxArray = (arr) => {
    return Math.max(...arr);
}

let arr = [1, 6, 2, 9];
let maxNumber = maxArray(arr);
alert("The max number from array is: " + maxNumber);