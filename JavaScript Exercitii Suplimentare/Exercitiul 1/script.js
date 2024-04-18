// 1. Create a function that takes two numbers as parameters (num, length) and returns an array of multiples of num until the 
//array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(2, 6) ➞ [2, 4, 6, 8, 10, 12]

let arrayOfMultiples = (num, length) => {
    let array = [];
    for (let i = 1; i <= length; i++) {
        array.push(num * i);
    }
    return array;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(2, 6));
console.log(arrayOfMultiples(10, 7));
