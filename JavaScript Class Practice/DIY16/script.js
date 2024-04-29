function Numbers(){
    let sum = 0;

    for(let i = 0; i < 5; i++){
        let number = parseInt(prompt('Add a number' + i));
        sum = sum + number;
    }

    let showParagraph = document.getElementById('sum');
    showParagraph.textContent = 'Display the sum: ' + sum;
}