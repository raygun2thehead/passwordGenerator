// Assignment Code
var generateBtn = document.querySelector("#generate", writePassword);

// Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var password = document.querySelector("#password");

    enter = prompt("How many characters would you like your password? Choose between 8 and 128");
    
    if (!enter) {
        alert("This needs a value");
        rewind = writePassword();
    } 
    else if (enter < 8 || enter > 128) {
        enter = prompt("You must choose between 8 and 128");
        rewind = writePassword();
    } 
    else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
        confirmSymbol = confirm("Will this contain special characters?");
    };

    console.log(confirmNumber);
    console.log(confirmUppercase);
    console.log(confirmLowercase);
    console.log(confirmSymbol);
    console.log(enter);
    console.log(writePassword);
  
    function getRandomNumber(){
            return String.fromCharCode[Math.floor(Math.random()*10)];
            }
    function getRandomUpperCase(){
            return String.fromCharCode(Math.floor(Math.random()*26));
            }
   function getRandomLowerCase(){
            return String.fromCharCode(Math.floor(Math.random()*26));
            }
   function getRandomSymbol(){
            var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
            return symbol[Math.floor(Math.random()*symbol.length)];
            }

    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
        rewind = writePassword();
    };
  
    var choices;

    if (confirmNumber){
        choices = character.concat(getRandomNumber.value);
    };
    if (confirmUppercase){
        choices = character.concat(getRandomUpperCase.value);
    };
    if (confirmLowercase){
        choices = character.concat(getRandomNumber.value);
    };
    if (confirmSymbol){
        choices = character.concat(getRandomSymbol.value);
    };
    if (confirmNumber && confirmUppercase){
        choices = character.concat(getRandomNumber.value, getRandomUpperCase.value);
    };
    if (confirmNumber && confirmLowercase){
        choices = character.concat(getRandomNumber.value, getRandomLowerCase.value);
    };
    if (confirmNumber && confirmSymbol){
        choices = character.concat(getRandomNumber.value, getRandomSymbol.value);
    };
    if (confirmUppercase && confirmLowercase){
        choices = character.concat(getRandomUpperCase.value, getRandomLowerCase.value);
    };
    if (confirmUppercase && confirmSymbol){
        choices = character.concat(getRandomUpperCase.value, getRandomSymbol.value);
    };
    if (confirmLowercase && confirmSymbol){
        choices = character.concat(getRandomNumber.value, getRandomSymbol.value);
    };
    if (confirmNumber && confirmUppercase && confirmLowercase){
        choices = character.concat(getRandomNumber.value, getRandomUpperCase.value, getRandomLowerCase.value);
    };
    if (confirmNumber && confirmUppercase && confirmSymbol){
        choices = character.concat(getRandomNumber.value, getRandomUpperCase.value, getRandomSymbol.value);
    };
    if (confirmNumber && confirmLowercase && confirmSymbol){
        choices = character.concat(getRandomNumber.value, getRandomLowerCase.value, getRandomSymbol.value);
    };
    if (confirmUppercase && confirmLowercase && confirmSymbol){
        choices = character.concat(getRandomUpperCase.value, getRandomLowerCase.value, getRandomSymbol.value);
    };
    if (confirmNumber && confirmUppercase && confirmLowercase && confirmSymbol){
        choices = character.concat(getRandomNumber.value, getRandomUpperCase.value, getRandomLowerCase.value, getRandomSymbol.value);
    };
   
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // passwordText.value = password;

    // const randomFunc = {
    //     number : getRandomNumber,
    //     upper : getRandomUpperCase,
    //     lower : getRandomLowerCase,
    //     symbol : getRandomSymbol
    // };

    // function generatePassword(upper, lower, number, symbol, length){
    // let generatedPassword = "";

    // const typesCount = upper + lower + number + symbol;

    // // console.log(typesCount);

    // const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    // if(typesCount === 0) {
    //     return '';
    // }

    // for(let i=0; i<length; i+=typesCount) {
    //     typesArr.forEach(type => {
    //         const funcName = Object.keys(type)[0];
    //         generatedPassword += randomFunc[funcName]();
    //     });
    // }

    // const finalPassword = generatedPassword.slice(0, length);


    // return finalPassword;
    // }
}

generateBtn.addEventListener("click", writePassword);

// generateBtn.addEventListener("click", function () {
//     ps = writePassword();
//     document.getElementById("password").placeholder = ps;
// })

// generateBtn.addEventListener('click', () =>{
//     const length = +enter.value;
//     const hasUpper = confirmUppercase.true;
//     const hasLower = confirmLowercase.true;
//     const hasNumber = confirmNumber.true;
//     const hasSymbol = confirmSymbol.true;

// document.querySelector("#password") = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
// });