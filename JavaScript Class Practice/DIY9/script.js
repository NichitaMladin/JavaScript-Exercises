let program = () => {
    let number = parseFloat(prompt("Please add your number"));
    if(number % 2 === 0){
        alert("The number is divisible by 2");
    }else{
        alert("The number is not divisible by 2");
    }
}

program();