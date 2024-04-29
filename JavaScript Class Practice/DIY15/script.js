function evenNumbers(){
    let countEven = 0;

    for(let i = 0; i < 4; i++){
        let number = parseInt(prompt('Add a number' + i));
        if(number % 2 === 0){
            countEven++;
        }
    }

    let showParagraph = document.getElementById('details');
    showParagraph.textContent = 'Display the even numbers: ' + countEven;
}