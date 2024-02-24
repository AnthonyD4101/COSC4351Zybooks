// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10){
    let currGuesses = 0;

    userGuess = prompt("Enter a number between 1 and 100.");

    while(currGuesses <= totalGuesses)
    {
        if(userGuess == numToGuess)
        {
            currGuesses++;
            return currGuesses;
        }

        if (userGuess == null)
            return 0;

        if(isNaN(userGuess))
        {
            userGuess = prompt("Please enter a number.");
        }
        
        if(userGuess < numToGuess)
        {
            currGuesses++;
            userGuess = prompt(userGuess + " is too small. Guess a larger number.");
        }
        
        if(userGuess > numToGuess)
        {
            currGuesses++;
            userGuess = prompt(userGuess + " is too large. Guess a smaller number.");
        }
    }

    return 0;
}