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

function promptCriteria() {
  while(criteria != 1 && criteria != 2 && criteria != 3) {
    criteria = prompt("Which criteria should be included in the password? 1: Length of Password, 2: Character Types, 3: Both", length);
  }
  if(criteria == 1)
    lengthCriteria = true;
  else if (criteria == 2) {
    length = Math.floor(Math.random() * 120) + 8;
    characterTypesCriteria = true;
  }
  else {
    lengthCriteria = true;
    characterTypesCriteria = true;
  } 
  if(lengthCriteria) {
    while (length < 8 || length > 128 || isNaN(length)){
      length = parseInt(prompt("What is the length of the password","Between 8 and 128"))
    }
  }
  if(characterTypesCriteria){
    var ans = "";
    while(ans != "yes" && ans != "no"){
      ans = prompt("Should the password include lowercase?","yes or no");
    }
    if(ans == "no") {
      useLower = false;
    }
    ans = "";
    while(ans != "yes" && ans != "no"){
      ans = prompt("Should the password include uppercase?","yes or no");
    }
    if(ans == "no") {
      useUpper = false;
    }
    ans = "";
    while(ans != "yes" && ans != "no"){
      ans = prompt("Should the password include digits?","yes or no");
    }
    if(ans == "no") {
      useDigit = false;
    }
    ans = "";
    while(ans != "yes" && ans != "no"){
      ans = prompt("Should the password include Special Characters?","yes or no");
    }
    if(ans == "no") {
      useSpecial = false;
    }
    ans = "";
    console.log(categories);
  }
}

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
