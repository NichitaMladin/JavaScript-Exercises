let arr = [400, 600, 35];
console.log(arr);

arr.pop();

let descendingOrder = arr.sort(function(a, b){
    return b-a;
});

alert(descendingOrder);