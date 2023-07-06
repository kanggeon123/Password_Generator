// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digit = "0123456789";
var special = "!@#$%^&*()_+-=[];',./{}|L:<>?";
var categories = [lower,upper,digit,special];
var passwordCatergories = [];
var lengthCriteria = false;
var characterTypesCriteria = false;
var criteria = -1;
var useLower = true;
var useUpper = true;
var useDigit = true;
var useSpecial = true;
var length = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
