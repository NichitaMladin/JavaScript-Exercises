function calculations() {
    let sum = 0;
    let countAbove1000 = 0;

    for(let i= 0; i < 5; i++){
        let salary = parseFloat(prompt("Add salary: " + (i+1)));
        sum = sum + salary;

        if(salary > 1000){
            countAbove1000++;
        }
    }

    let average = sum / 5;
    
    let sumParagraph = document.getElementById('sum');
    sumParagraph.textContent = "Sum of salaries: " + sum;

    let averageParagraph = document.getElementById('average');
    averageParagraph.textContent = "Average of salaries: " + average;

    let above1000Paragraph = document.getElementById('above1000');
    above1000Paragraph.textContent = "Above 1000 are: " + countAbove1000;
}