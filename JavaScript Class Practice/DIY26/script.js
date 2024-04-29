const maxBetween3Numbers = function(n1, n2, n3){
    return Math.max(n1, n2, n3);
}

console.log(maxBetween3Numbers(12, 18, 3));

const findMax = function(){
    let num1 = parseInt(prompt("Add first number:"));
    let num2 = parseInt(prompt("Add the second number: "));
    let num3 = parseInt(prompt("Add the third number: "));

    let maxNumber = maxBetween3Numbers(num1, num2, num3);

    let maxParagraph = document.getElementById("max");
    maxParagraph.textContent = "Max number: " + maxNumber;

}