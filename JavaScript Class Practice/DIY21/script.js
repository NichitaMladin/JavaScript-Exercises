let arr = [400, 600, 35];
console.log(arr);
let ascendingOrder = arr.sort(function(a, b){
    return b-a;
});

alert(ascendingOrder);