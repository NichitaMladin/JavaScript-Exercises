let displaySum = () => {
    let num1 = parseFloat(prompt("Please add the first number: "));
    let num2 = parseFloat(prompt("Please add the second number: "));
    let sum = num1 + num2;
    alert("The sum is: " + sum);

    // let displaySumAlert = document.getElementById("displaySumAlert");
    // displaySumAlert.addEventListener("click", displaySum);
    // document.getElementById("displaySumAlert").addEventListener("click", displaySum);
}

    document.getElementById("displaySumAlert").addEventListener("click", displaySum);

    
let displaySumAsParagraph = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    // console.log("Primul număr:", num1);
    // console.log("Al doilea număr:", num2);

    let sum = num1 + num2;

    // console.log("Suma:", suma);

    let paragraphResult = document.getElementById("result");
    paragraphResult.textContent = sum;

    // document.getElementById("result").innerText = "The sum of numbers is: " + sum;
}

