function addNumbers() {
    let arr = [];

    for(let i = 0; i < 5; i++){
        let number = parseInt(prompt("Add a number: " + (i + 1)));
        arr.push(number);
    }

    let numbersParagraph = document.getElementById('numbers');
    numbersParagraph.textContent = "Display the numbers: " + arr.join(', ');
}