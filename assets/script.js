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
        return pLength;
    }
};

// Ask if user wants to have Upper-case characters
var confirmUpperCase = function() {
    var upperCase = window.confirm("Would you like to add at least one upper-case character?");
    if (upperCase) {
        return true;
    }
    else {
        return false;
    }
};

// Ask if user wants to have Lower-case characters
var confirmLowerCase = function() {
    var lowerCase = window.confirm("Would you like to add at least one lower-case character?");
    if(lowerCase) {
        return true;
    }
    else {
        return false;
    }
};

// Ask if user wants to have numeric characters
var confirmNumericChar = function() {
    var numericChar = window.confirm("Would you like to add at least one numeric character?");
    if(numericChar) {
        return true;
    }
    else {
        return false;
    }
};

// Ask if user wants to have special characters
var confirmSpecial = function() {
    var specialChar = window.confirm("Would you like to add at least one special character?");
    if(specialChar) {
        return true;
    }
    else {
        return false;
    }
};

// Password Object
var passwordInfo = {
    pLength: getPLength(),
    upperCase: confirmUpperCase(),
    lowerCase: confirmLowerCase(),
    numericValue: confirmNumericChar(),
    specialChar: confirmSpecial()
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
