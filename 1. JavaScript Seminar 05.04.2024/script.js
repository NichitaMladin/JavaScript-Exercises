// const decreaseButton = document.querySelector("#decrease_button"); 
// const decreaseButton = document.getElementById("decrease_button");
// ambele metode de mai sus fac acelasi lucru


const decreaseButton = document.querySelector("#decrease_button");
const display = document.querySelector("#display"); 
const increaseButton = document.querySelector("#increase_button"); 

let counter = 0; 
display.innerHTML = counter;
decreaseButton.addEventListener('click', decreaseCounter);
increaseButton.addEventListener('click', increaseCounter);

function decreaseCounter(){
    console.log(counter);
    if(counter == 0) {
        console.log('It cannot decrease counter'); 
        return;
    }
    counter--
    console.log(counter);
    display.innerHTML = counter;
}

function increaseCounter(){
    counter++
    console.log(counter);
    display.innerHTML = counter;
}


