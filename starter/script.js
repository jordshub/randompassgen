// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

let selectedChars = []
let passLength = 0


// Function to prompt user for password options
function getPasswordOptions() {
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("How long would you like the password to be? Atleast 8 characters but no more than 128")
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please enter a number between 8 and 128");
    }
    if (confirm("Would you like upper case characters?")) {
      selectedChars = selectedChars.concat(upperCasedCharacters);
    }
    if (confirm("Would you like lower case characters?")) {
      selectedChars = selectedChars.concat(lowerCasedCharacters);
    }
    if (confirm("Would you like special characters?")) {
      selectedChars = selectedChars.concat(specialCharacters);
    }
    if (confirm("Would you like any numbers in your password?")) {
      selectedChars = selectedChars.concat(numericCharacters);
    }

    return selectedChars;

  };
}

// Function for getting a random element from an array
function getRandom() {
  let password = "";

  for (let i = 0; i < passLength; i++) {
    let randomPass = Math.floor(Math.random() * selectedChars.length)
    password = password + selectedChars[randomPass]
  };

  return password;
};

// Function to generate password with user input    
function generatePassword() {
  console.log("button was clicked")

  getPasswordOptions();

  let password = getRandom()

  return password;
}


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);