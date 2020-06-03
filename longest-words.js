// Longest Words

function longestWords(str) {
let words = str.split(' '); //space
let size = 0;
let max = [''];

for (let i = 0; i < words.length; i++) { // i < words.length means less than the length of the array
if (words[i].length >= size) {
   size = words[i].length; 
   if(max[max.length-1].length <words[i].length) {
       max = []; 
       max.push(words[i]) 
   } 
   else {
       max = [...max, words[i]]; //return all max length words
   }
 }
}
return [...max]; // return longest word
}

alert(longestWord("Awesome Perseverance Persistense Good Excellent Outstanding Project"));