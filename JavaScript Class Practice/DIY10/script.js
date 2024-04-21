let luckyNumber = () => {
    let number = parseFloat(prompt("Please add the lucky number:"));
    if(number === 7){
        alert("Congratulation, you won 1,000,000$");
    }else{
        alert("Please try next time");
    }
}

luckyNumber();