console.log("HELLO YOU BEAUTIFUL WORLD YOU");

// Password Generator 

// Character Generator Functions 

// Function that accepts a string value as an argument and returns a random index number from the string 
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
// Example of the randomIndex function
console.log(randomIndex(`chicken`));; // 0, 1, 2, 3, 4, 5, 6

//
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    // Returning a random letter using a random index in the "letters" string
    return letters[randomIndex(letters)];
}

// Example of the getRandomLower function
console.log(getRandomLower()); // Random lowercase letter

// 
function getRandomUpper(){
    // Running the "getRandomLower" function to create a random letter and setting that value to the letter variable
    const letter = getRandomLower();
    // Changing the random letter to an uppercase letter and returning it from the function
    return letter.toUpperCase();
}

console.log(getRandomUpper()); // Random uppercase letter

// Function that returns a random number (aka Random string value of a number)
function getRandomNumber(){
    const numbers = `0123456789`;
    //
    return numbers[randomIndex(numbers)];
}

// Example of the getRandomNumber function 
console.log(getRandomNumber()); // Random number from the "numbers" string

// Function that returns a random symbol
function getRandomSymbol(){
    const symbol = `!@#$%^&*(){}[]=<>/,.`;
    // Returning a random symbol using a random index in the "symbols" string
    return symbol[randomIndex(symbol)]; 
}

// Commit After Generators

