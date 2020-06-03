//Arithmetic, Geometric or No pattern
// no negative numbers

function mathSequences(arr) {
    let arith = new Set(); //unique values
    let geo = new Set(); 

for(let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i-1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
}
if (arith.size === 1) {
    return "Arithmetic"
}
if (geo.size === 1) {
    return "Geometric"
}
return -1;
}




alert(mathSequences([20, 40, 80, 160]));
//geometric
alert(mathSequences([100, 200, 300, 400]));
//arithmetic