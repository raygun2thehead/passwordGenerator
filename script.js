// Assignment Code
var generateBtn = document.querySelector("#generate", writePassword);

// Write password to the #password input
function writePassword() {
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


    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
        rewind = writePassword();
    };
  
    if (confirmNumber){
       function getRandomNumber(){
            return String.fromCharCode[Math.floor(Math.random()*10)];
            }
    };
    if (confirmUppercase){
        function getRandomUpperCase(){
            return String.fromCharCode(Math.floor(Math.random()*26));
            }
    };
    if (confirmLowercase){
        function getRandomLowerCase(){
            return String.fromCharCode(Math.floor(Math.random()*26));
            }
    };
    if (confirmSymbol){
        function getRandomSymbol(){
            var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
            return symbol[Math.floor(Math.random()*symbol.length)];
            }
    };

    const randomFunc = {
        number : getRandomNumber,
        upper : getRandomUpperCase,
        lower : getRandomLowerCase,
        symbol : getRandomSymbol
    };

    console.log(number.value)

 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    // console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
    }
}
generateBtn.addEventListener("click", function() {
    writePassword();
    document.querySelector("#password").placeholder
    });

generateBtn.addEventListener('click', () =>{
    const length = +enter.value;
    const hasUpper = confirmUppercase.true;
    const hasLower = confirmLowercase.true;
    const hasNumber = confirmNumber.true;
    const hasSymbol = confirmSymbol.true;

document.querySelector("#password") = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

