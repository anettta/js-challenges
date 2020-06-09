// unique values using Set() data structure

function unique(str) {
return new Set(str).size === str.length; // insted of below commented out code

// let tempStr = new Set();
// for (let letter of str) {
//     if (tempStr.has(letter)) {
//         return false;
//     }
//     tempStr.add(letter);
// }
//     return true;
}

alert(unique("hello"));
// returns false 
alert(unique("hey"));
// return true