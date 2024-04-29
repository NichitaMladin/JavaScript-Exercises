function showPic() {
    let number = prompt("Please add a number");
    number = parseInt(number);

    let img1 = document.getElementById('a1');
    let img2 = document.getElementById('a2');
    let img3 = document.getElementById('a3');
    let img4 = document.getElementById('a4');

    if(number < 100){
        img1.style.display = 'inline';
        img2.style.display = 'inline';
        img3.style.display = 'inline';
        img4.style.display = 'inline';
    }else if(number === 100){
        img1.style.display = 'inline';
        img2.style.display = 'inline';
        img3.style.display = 'none';
        img4.style.display = 'none';
    }else if(number > 100){
        img1.style.display = 'inline';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'none';
    }else{
        alert("Invalid input!");
    }
}