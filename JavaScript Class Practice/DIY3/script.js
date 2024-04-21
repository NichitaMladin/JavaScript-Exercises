let displayAverage = () => {
    let num1 = parseFloat(prompt("Please add the first number: "));
    let num2 = parseFloat(prompt("Please add the second number: "));
    let num3 = parseFloat(prompt("Please add the third number: "));
    let average = (num1 + num2 + num3) / 3;
    alert("The average is: " + average);
}

document.getElementById("displayAverageAlert").addEventListener("click", displayAverage);

let displaySumAsParagraph = () =>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let average = (num1 + num2 + num3) / 3;

    let mypResult = document.getElementById("myp");
    mypResult.textContent = average;
}