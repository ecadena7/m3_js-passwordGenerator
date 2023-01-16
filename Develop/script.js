// Assignment code here
var length = true;
var specialCharacters = true;
var numbers = true;
var lowercase = true;
var uppercase = true;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt('What is the length of the password?');

  if (passwordLength < 8) { //this needs to be changed to read - 8 CHARACTERS
    alert('Please pick something larger than 8 characters.')
  }
  if (!passwordLength > 128) { //this needs to be changed to read - 128 CHARACTERS
    alert('Please pick something smaller than 128 characters.')
  } 
  if (passwordLength) 
  console.log(passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
