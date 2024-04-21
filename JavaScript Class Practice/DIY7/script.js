let randomNumber = () => {
    let randomNum = Math.floor(Math.random() * 101);
    document.getElementById("num").innerText = randomNum;
}

//if we click on the blue square, the random number will appear
document.getElementById("num").addEventListener("click", randomNumber);