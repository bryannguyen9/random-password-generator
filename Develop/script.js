// Assignment Code
var generateBtn = document.querySelector("#generate");

//----------------prompt section-----------------------
function generatePassword() {
  // Prompt user for password criteria

  // Check if user entered a valid length and selected at least one character set
  //still need to do a while so the length prompt loops until correct length
  var length = parseInt(prompt("How many characters should the password contain? (8-128)"));
    if (lengthCheck(length) || length < 8 || length > 128 || charSet === "") {
      alert("Invalid password length. Must be between 8-128 characters.");
      return;
    }
  var includeLowercase = confirm("Should the password include lowercase letters?");
  var includeUppercase = confirm("Should the password include uppercase letters?");
  var includeNumeric = confirm("Should the password include numbers?");
  var includeSpecial = confirm("Should the password include special characters?");

  // Define character sets to be used based on user input
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Build character set based on user input
  var charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumeric) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }

 // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  // Return generated password
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



