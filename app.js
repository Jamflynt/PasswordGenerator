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

// Example of the getRandomSymbol function
console.log(getRandomSymbol()); // Random symbol from the "symbols" string

// Object to store all the character generator functions
const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber, 
    symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

// Function that accepts true or false values as well as a number as arguments
// Note: The checkbox inputs and number (aka length) input will determine the value/arguments entered into this function
function generatePassword(lower, upper, number, symbol, length){

    console.log(lower, upper, number, symbol, length);
    // 1. Create the password variable
    let generatedPassword = ``;

    // 2. Filter out unchecked options 
    // True and false values can be added together (True is 1 and false is 0)
    // Note: the value set to typesCount will be used when building the password
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount);

    // If the user has not selected any of the four options, then display alert and return an empty string from the function so the password displayed will just be an empty string
    if(typesCount === 0){
        alert(`Please select at least one option`);
        // Return keyword stops/ends the execution of a function (aka does not run any of the code on the lines that follow the return in the function)
        return ``;
    }

    // Creating an array of arrays. The first item in each nested array holds the value of a string that will be used to access a function in the randomFunctions object. Also, the second item in the each nested array is one of the values passed into this generatePassword function.
    let typesArr = [
        [`lower`, lower],
        [`upper`, upper],
        [`number`, number],
        [`symbol`, symbol]
    ];

    // The filter method creates a new array with all the items that pass the test implemented by the provided function (aka all the items that cause the function to return a boolean value of true when the function is run using the item as an argument for the item parameter in this example)
    // Checking if the value for each item in the array is true or false. Also removing the item from the array if it is false
    typesArr = typesArr.filter(item => {
        console.log(item[1]);
        return item[1];
    });
    console.log(`typesArr:`, typesArr);
    // 3. Loop over the length and call the generator function for each checked option
    // Building password with a for loop
    // Note: The value for "length" is the value selected for the length number input
    for (i = 0; i < length; i += typesCount){
        // One of the items in the updated/filtered version of the typesArr will be the value/argument passed into for the type parameter each time the anonymous arrow function is run/executed
        typesArr.forEach(type => {
            const funcName = type[0];
            console.log(funcName);
            // Accessing and running/executing a function in the randomFunctions object. Also, adding/concatenating the value returned from the accessed function to the generatedPassword string variable
            generatedPassword += randomFunctions[funcName]();
            console.log(generatedPassword);
        });
    }

    // 4. Add the generated password to the final variable and return it from the function
    // Removing extra characters if necessary) The above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected)
    const finalPassword = generatedPassword.slice(0, length);
    console.log(finalPassword);
    return finalPassword;
}

// Example of generatePassword function 
// Note: Using the starting value for when the page first loads
generatePassword(true, false, true, false, 4);

// Event listener for when the "Generate Password" button is clicked
generateEl.addEventListener(`click`, () => {
    // Checking if the following options/checkboxes are selected and setting the true or false values to the respective variables
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    // Accessing the value for the number input and changing the value from string to a number
    // Note: the value returned from a number input is a string value
    const length = lengthEl.value;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
