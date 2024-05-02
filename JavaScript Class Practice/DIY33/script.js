const checkNumberArray = (arr, num) =>{
    return arr.includes(num);
}

let arr = [1, 6, 2, 9];
let num = 6;

if(checkNumberArray(arr, num)){
    alert(num + ' exist in the array');
}else{
    alert(num + ' does not exist in the array');
}