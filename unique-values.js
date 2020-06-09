// return true only if all values are unique, otherwise false
// using Array, Object, string method lastIndexOf()
// no Set Data Structure

function unique(str) {
for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i])!==i) {
        return false;
    }
   
}
return true;



    // refactoring the below commented out code: OBJECT
//  let values = {};
//     for (let letter of str) {
//         if (values[letter]) {
//             return false;
//         }
//         values[letter] = "exists";
//     }
//     return true;


// ARRAY BELOW

    // let values = [];
    // for (let letter of str) {
    //     if (values.indexOf(letter) !== -1) {
    //         return false;
    //     }
    //     values.push(letter);
    // }
    // return true;
}

alert(unique("good"));
// false
alert(unique("math"));
// true