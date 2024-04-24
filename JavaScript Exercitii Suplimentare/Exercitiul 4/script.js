let christmasTree = () => {
    let maxTreeHeight = 4;
    let tree = '';

    //codul care stabileste inaltimea bradului si liniile acestuia
    for(let i = 1; i <= maxTreeHeight; i++){
        let line = '';

    //codul care stabileste spatiile goale pana la stelute
        for(let j = 1; j <= maxTreeHeight - i; j++){
            line = line + ' ';
        }

    //codul care introduce stelutele pe pozitie si in numarul corect
            for(let k = 1; k <= i * 2 - 1; k++){
                line = line + '*';
            }

        //codul care adauga la tree
        tree = tree + line + '\n';

    }

    return tree;
}

// document.getElementById('myDiv').innerHTML = (`<pre>${christmasTree()}</pre>`);

console.log(christmasTree());