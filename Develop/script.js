// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = parseInt(
    prompt("How long from 8 to 128 characters would you like to choose?")
  );
  if (isNaN(passwordLength)) {
    alert("Only numbers are allowed");
    return;
  }
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (passwordLength > 128) {
    alert("Password must be less than 129 characters");
    return;
  }
  
  var confirmLowercase = confirm(
    "Would you like your password to include lowercase?"
  );
  var confirmUppercase = confirm(
    "Would you like your password to include uppercase?"
  );
  var confirmNumeric = confirm(
    "Would you like your password to include numbers?"
  );
  var confirmSpecial = confirm(
    "Would you like your password to include special characters?"
  );
}

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
