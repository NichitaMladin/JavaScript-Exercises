let checkLuckyNumbers = () =>{
    let luckyNumber = parseFloat(prompt("Add lucky number"));
    let detailsParagraph = document.getElementById("details");

    if(luckyNumber === 777){
        detailsParagraph.textContent = "1,000,000$";
        detailsParagraph.style.color = "blue";
        detailsParagraph.style.backgroundColor = "yellow";
        detailsParagraph.style.border = "1px solid green";
    }else{
        detailsParagraph.textContent = "Mladin Nichita";
        detailsParagraph.style.color = "yellow";
        detailsParagraph.style.backgroundColor = "black";
        detailsParagraph.style.border = "5px solid red";
    }
}

button.addEventListener("click", checkLuckyNumbers);