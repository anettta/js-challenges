// pause to work on your solution
// with array i can sort 
function ArraySum(arr) {
let tempArr = arr.sort((a,b) => {
    return a - b; // if b-a -> sorts array in reverse order, max at the beginning.
});
let largest = tempArr.pop();

   let number = 0;
   tempArr.forEach(item => (number += item));
   return largest === number;
}

alert(ArraySum([1,2, 3, 1, 7]));
// returns true 1+2+3+1=7
alert(ArraySum([1,2, 3, 1, 9]));
// false