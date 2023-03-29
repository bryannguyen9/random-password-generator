// Assignment Code
var generateBtn = document.querySelector("#generate");

//----------------prompt section-----------------------
var properLength = false;
var wantLower = false;
var wantUpper = false;
var wantNumbers = false;
var wantSpecial = false;

function getLength() {
      while (properLength == false) {
        var length = prompt("Please enter how long you would like your password to be (8-128 characters)", );
        var intLength = parseInt(length);
          if (intLength >= 8 && intLength <= 128) {
            properLength = true;
            window.alert("You entered that you wanted a password length of: " + intLength);
          }
          else {
            window.alert("You cannot have a password of length: " + length);
          }
      }
      return intLength;
    }

function getLowerOption() {
  let lowercaseOption = window.confirm("Do you want lowercase in password? (Press 'OK' for yes or 'CANCEL' for no)");
    if (lowercaseOption == true) {
      wantLower = true;
      window.alert("You entered that you wanted lowercase in your password!");
    }
    else {
      window.alert("You entered that you did not want lowercase in your password!");
    }
    return lowercaseOption;
}

function getUpperOption() {
  let uppercaseOption = window.confirm("Do you want UPPERcase in password? (Press 'OK' for yes or 'CANCEL' for no)");
    if (uppercaseOption == true) {
      wantUpper = true;
      window.alert("You entered that you wanted UPPERcase in your password!");
    }
    else {
      window.alert("You entered that you did not want UPPERcase in your password!");
    }
    return uppercaseOption;
}

function getNumericOption() {
  let numericOption = window.confirm("Do you want numerics in password? (Press 'OK' for yes or 'CANCEL' for no)");
    if (numericOption == true) {
      wantNumbers = true;
      window.alert("You entered that you wanted numerics in your password!");
    }
    else {
      window.alert("You entered that you did not want numerics in your password!");
    }
    return numericOption;
}

function getSpecialOption() {
  let specialOption = window.confirm("Do you want special characters (i.e. @,#,*,%...) in password? (Press 'OK' for yes or 'CANCEL' for no)");
    if (specialOption == true) {
      wantSpecial = true;
      window.alert("You entered that you wanted special characters in your password!");
    }
    else {
      window.alert("You entered that you did not want special characters in your password!");
    }
    return specialOption;
}

//--------generate password section---------------
function generatePassword() {
  var promptFinish = false;

  while (!promptFinish) {
    var passwordLength = getLength();
    var lowerOption = getLowerOption();
    var upperOption = getUpperOption();
    var numericOption = getNumericOption();
    var specialOption = getSpecialOption();
    promptFinish = true;
  }
  
  if (promptFinish = true) {
    if (lowerOption == true && upperOption == true && numericOption == true && specialOption == true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == true && numericOption == true && specialOption == true) {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == true && upperOption == false && numericOption == true && specialOption == true) {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == true && upperOption == true && numericOption == false && specialOption == true) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == true && upperOption == true && numericOption == true && specialOption == false) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == true && upperOption == false && numericOption == false && specialOption == false) {
      charset = "abcdefghijklmnopqrstuvwxyz",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == false && numericOption == true && specialOption == true) {
      charset = "0123456789!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == true && numericOption == false && specialOption == true) {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == true && numericOption == true && specialOption == false) {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == false && numericOption == false && specialOption == true) {
      charset = "!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == false && numericOption == false && specialOption == false) {
      charset = "-",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == true && numericOption == false && specialOption == false) {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == false && numericOption == true && specialOption == false) {
      charset = "0123456789",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }

    else if (lowerOption == false && upperOption == false && numericOption == false && specialOption == true) {
      charset = "!@#$%^&*()_+",
      password = "";
        for (var i = 0, n = charset.length; i < length; i++) {
          password += passwordLength.charAt(Math.floor(Math.random() * n));
        }
      console.log(password);
    }
    
  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



