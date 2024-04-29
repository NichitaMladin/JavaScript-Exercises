let arr = [400, 600, 35];
console.log(arr);
let ascendingOrder = arr.sort(function(a, b){
    return a-b;
});

alert(ascendingOrder);