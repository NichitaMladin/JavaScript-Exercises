let selectBackColor = () =>{
    let userColor = prompt("Enter the background color");

    if(userColor !== null){
        let divElement = document.getElementById("myDiv");

        divElement.style.backgroundColor = userColor;
    }
}

document.getElementById("changeBackgroundColor").addEventListener("click", selectBackColor);


let selectTextColor = () => {
    let userColor = prompt("Enter text color");

    if(userColor !== null){
        let phElement = document.getElementById("myPh");

        phElement.style.color = userColor;
    }
}

document.getElementById("changeTextColor").addEventListener("click", selectTextColor);