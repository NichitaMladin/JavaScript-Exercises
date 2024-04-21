let program = () => {

    let num1 = parseFloat(prompt("Please add the first number"));
    let num2 = parseFloat(prompt("Please add the second number"));

    if(num1 > num2){
        alert("The bigger number is num1: " + num1);
    }else if(num2 > num1){
        alert("The bigger number is num2: " + num2);
    }else{
        alert("Both numbers are equal");
    }
}

program();