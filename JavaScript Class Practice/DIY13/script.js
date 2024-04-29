function makeSum() {
    let firstNumber = prompt("Enter the first number");
    let secondNumber = prompt("Enter the second number");

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let sum = firstNumber + secondNumber;

    let showParagraph = document.getElementById('details');
    showParagraph.textContent = "The sum of numbers is: " + sum;

    if(sum > 100){
        showParagraph.style.color = 'blue';
    }else{
        showParagraph.style.color = 'red';
    }
}