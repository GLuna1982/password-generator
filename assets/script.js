// Assignment code here
var generatePassword = function() {
    
};

// Get password length and validate if length is good
var getPLength = function() {
    var pLength = window.prompt("How long do you want the password to be? (Password can't be no less than 8 characters and no more than 128 characters");
    
    //validate if length value is valid if not restart getPLenght function
    if (pLength < 8 || pLength > 128) {
        window.alert("Please input a valid answer.")
        getPLength();
    }
    else {
        console.log(pLength);
        return pLength;
    }
};

// Password Object
var passwordInfo = {
    pLength: getPLength(),


};

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
