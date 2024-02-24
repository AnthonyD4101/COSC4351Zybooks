function calcWordFrequencies() {
    let userInput = prompt();

    // Split input into an array of words
    let words = userInput.split(' ');
    
    let freq = new Map();

    // Count frequencies of each word
    for (let word of words) {
        // If the word exists in the map, increment its count
        if (freq.has(word)) {
            freq.set(word, freq.get(word) + 1);
        } else {
            // Otherwise, initialize its count to 1
            freq.set(word, 1);
        }
    }

    // Output word frequencies
    for(let [word, count] of freq){
        console.log(word + " " + count);
    }
}