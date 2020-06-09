function capitalizeWords(str) {
    let words = str.split(" ").map(word => {
    //     let firstLetter = word.slice(0,1); // 0 = start 1 = end
    //     let theRestOfTheWord = word.slice(1); // start = 1, no end, so the rest of the word
    //     firstLetter = firstLetter.toUpperCase();
    //     return `${firstLetter}${theRestOfTheWord}`;
    return word.charAt(0).toUpperCase() + word.slice(1); // insted of commented out lines above, shorter code
    });

    return words.join(" ");
}

alert(capitalizeWords("I like to run"));