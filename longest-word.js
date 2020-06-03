function longestWord (str) {
let words = str.split(" ");
let longestWord = '';

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

    return longestWord;
}

alert(longestWord("I woke up early yayyyyyyyy"));