var specialCharactersChars = [
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
var numericCharactersChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharactersChars = [
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

var upperCaseCharactersChars = [];

  for (var i = 0; i < lowerCasedCharactersChars.length; i++) {
    upperCaseCharactersChars[i] = lowerCasedCharactersChars[i].toUpperCase();
  }
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
   var finalPassword = [] 
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

  var lowerCasedCharacters = confirm(
    "Would you like your password to include lowercase?"
  );
  var upperCaseCharacters = confirm(
    "Would you like your password to include uppercase?"
  );
  var numericCharacters  = confirm(
    "Would you like your password to include numbers?"
  );
  var specialCharacters = confirm(
    "Would you like your password to include special characters?"
  );
  if (!lowerCasedCharacters && !upperCaseCharacters && !numericCharacters && !specialCharacters ) {
    alert("You must choose at least one charater.");
    return;
  }

  var allPossibleChars = [];
  if (lowerCasedCharacters) {
    allPossibleChars = allPossibleChars.concat(lowerCasedCharactersChars);
  }
  if (upperCaseCharacters) {
    allPossibleChars = allPossibleChars.concat(upperCaseCharactersChars);
  }
  if (numericCharacters) {
    allPossibleChars = allPossibleChars.concat(numericCharactersChars);
  }
  if (specialCharacters) {
    allPossibleChars = allPossibleChars.concat(specialCharactersChars);
  }
  
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allPossibleChars.length);
    finalPassword.push(allPossibleChars[randomIndex]);
  }
  return finalPassword.join("");
}


  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
