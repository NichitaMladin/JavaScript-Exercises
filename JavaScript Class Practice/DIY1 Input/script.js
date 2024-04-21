function reset() {
    let divElement = document.getElementById('divWidth');
    divElement.style.width = "10px";
    divElement.style.backgroundColor = "yellow";
}

function enlarge() {
    let divElement = document.getElementById('divWidth');
    let currentWidth = parseInt(divElement.style.width);
    let newWidth = currentWidth + 10;
    divElement.style.width = newWidth + "px";
}