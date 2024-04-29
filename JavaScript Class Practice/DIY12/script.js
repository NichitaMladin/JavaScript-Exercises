function reset(){
    let detailsP = document.getElementById('details');
    detailsP.style.width = '10px';
    detailsP.style.backgroundColor= 'yellow';
}

function enlarge(){
    let detailsP = document.getElementById('details');

    if(!detailsP){
        console.error('P was not found');
        return;
    }

    let currentWidth = parseInt(detailsP.style.width);
    if (!currentWidth) currentWidth = 10;
    let newWidth = currentWidth + 10;
    detailsP.style.width = newWidth + 'px';

    if (newWidth > 500) {
        detailsP.style.backgroundColor = "brown";
    }else {
        detailsP.style.backgroundColor = "yellow";
    }
}