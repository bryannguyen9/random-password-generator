// Assignment Code
var generateBtn = document.querySelector("#generate");

var promptFinish = false;
while (!promptFinish) {
  let length = prompt("Please enter how long you would like your password to be (8-128 characters)", "");
  if (length != null && length >= 8 && length <= 128) {
    window.alert("You entered that you wanted a password length of: " + length);
    
  }
  else {
    window.alert("You cannot have a password of length: " + length);
  }

  let lowercaseOption = window.confirm("Do you want lowercase in password? (Press 'OK' for yes or 'CANCEL' for no)");
  if (lowercaseOption == true) {
    window.alert("You entered that you wanted lowercase in your password!");
    
  }
  else if (lowercaseOption == false) {
    window.alert("You entered that you did not want lowercase in your password!");
  }

  let uppercaseOption = window.confirm("Do you want UPPERcase in password? (Press 'OK' for yes or 'CANCEL' for no)");
  if (uppercaseOption == true) {
    window.alert("You entered that you wanted UPPERcase in your password!");
    
  }
  else if (uppercaseOption == false) {
    window.alert("You entered that you did not want UPPERcase in your password!");
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



