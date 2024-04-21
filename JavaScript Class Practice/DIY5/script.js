let changeBackgroundColor = () => {
    let selectColor = document.getElementById("pickColor").value;
    document.body.style.backgroundColor = selectColor;
}

document.getElementById("changeColor").addEventListener("click", changeBackgroundColor);