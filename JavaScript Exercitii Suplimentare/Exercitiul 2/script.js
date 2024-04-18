// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to 
// end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between 
// the sum of the even and odd numbers.

// Examples
// warOfNumbers([2, 8, 7, 5]) ➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

 let warOfNumbers = (numbers) =>{

    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i <= numbers.length; i++){
        if(numbers[i] % 2 === 0){
            sumEven = sumEven + numbers[i];
        } else {
            sumOdd = sumOdd + numbers[i];
        }
    }

        return Math.abs(sumEven - sumOdd);
 }

    console.log(warOfNumbers([2, 8, 7, 5]));