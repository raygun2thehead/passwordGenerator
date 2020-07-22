// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var character = "";
var skip = 0;
var prePass = "";
var numbChar = "0123456789".split("");
var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowChar = "abcdefghijklmnopqrstuvwxyz".split("");
var symbChar = "!@#$%^&*(){}[]=<>/,.|~?".split("");
//gives the button a function when clicked
generateBtn.addEventListener("click", writePassword);
//write function of buttion click
function writePassword() {
//first variable prompts a question for length
    var enter = prompt("How many characters would you like your password? Choose between 8 and 128");
//conditional checks to make sure the previous prompt is filled out and then goes on to confirm which characters will be used in the generator
    if (!enter) {
        alert("This needs a value");
        rewind = writePassword();
    } 
    else if (enter < 8 || enter > 128) {
        enter = prompt("You must choose between 8 and 128");
        rewind = writePassword();
    } 
    else {
        var confirmNumber = confirm("Will this contain numbers?");
        var confirmUppercase = confirm("Will this contain Uppercase letters?");
        var confirmLowercase = confirm("Will this contain Lowercase letters?");
        var confirmSymbol = confirm("Will this contain special characters?");
    }
//verifies that at least one character was chosen
    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        enter = alert("You must choose a criteria!");
        rewind = writePassword();
    }
  //says that if character wasnt selected to move on to the next when generating a password
    if (!confirmNumber) {
        skip++; 
    }
    if (!confirmUppercase) {
        skip++;
    }    
    if (!confirmLowercase) {
        skip++;
    }
    if (!confirmSymbol) {
        skip++;
    }    

    // if (skip === 0) {
    //     alert("You must choose criteria.");
    //     return null;
    // }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //loop that gets a random integer from the arrays selected until it reaches its length
    for (var i = 0; i < enter; i += skip) {        
        if (confirmNumber) {
            prePass += numbChar[getRandomInt(enter)]
        }
        if (confirmUppercase) {
            prePass += uppChar[getRandomInt(enter)]
        }        
        if (confirmLowercase) {
            prePass += lowChar[getRandomInt(enter)]
        }
        if (confirmSymbol) {
            prePass += symbChar[getRandomInt(enter)]
        }    
    }

password.innerText = prePass;
}

