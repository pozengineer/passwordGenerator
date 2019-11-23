// const generate = document.getElementById("generate");
// const password = document.getElementById("password");

var charSet01 = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
    alert("Welcome to Password Generator");

    // var length = 25;
    // var charSet03 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    // var n = charSet03.length;
    var retVal = "";

    // for (var i = 0; i < length; i++) {
    //     retVal += charSet03.charAt(Math.floor(Math.random() * n));
    // }
    // console.log(retVal);
    // document.getElementById("password").value = retVal;
    // return retVal;
    
    // var charSetArray = [
    //     "abcdefghijklmnopqrstuvwxyz",
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //     "0123456789",
    //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    // ];

    // console.log(charSetArray);

    var userInput = prompt("Please select type of password\n1. Lowercase Characters\n2. Uppercase Characters\n3. Numeric Characters\n4. Special Characters\n5. Mixed Characters");

    var inputNum = parseInt(userInput);
    // var passwordLength = prompt("Please enter length of Password");
    // var option = parseInt(userInput);
    // var length = parseInt(passwordLength);
    
    while (userInput != null) {
        if (inputNum === 1) {
            var passwordGen = characterSelect(0);
            return passwordGen;
        }
        else if (inputNum === 2) {
            var passwordGen = characterSelect(1);
            return passwordGen;
        }
        else if (inputNum === 3) {
            var passwordGen = characterSelect(2);
            return passwordGen;
        }
        else if (inputNum === 4) {
            var passwordGen = characterSelect(3);
            return passwordGen;
        }
        else if (inputNum === 5) {
            var passwordGen = characterSelect(4);
            return passwordGen;
        }
        else {
            alert("Error, Invalid input! Enter number 1, 2, 3, 4 or 5");    
        }
        userInput = prompt("Please select type of password\n1. Lowercase Characters\n2. Uppercase Characters\n3. Numeric Characters\n4. Special Characters\n5. Mixed Characters");
        var inputNum = parseInt(userInput);
    }
}

function characterSelect(j, i, k, l) {
    // var passwordLength = prompt("Please enter length of Password");
    var retVal = "";
    var charSetArray = [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    ];

    var passwordLength = document.getElementById("passwordLength").value;
    var x = parseInt(passwordLength);

    while (x < 8 || x > 128 || isNaN(x)){
        alert("Error, Invalid number!");
        var passwordLength = prompt("Password must be at least 8 characters!");
        var x = parseInt(document.getElementById("passwordLength").value = passwordLength);
    }

    console.log(charSetArray[j]);
    var charSet = charSetArray[j];
    var numSet = charSet.length;
    
    for (var i = 0; i < passwordLength; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * numSet));
    }

    console.log(retVal);
    document.getElementById("password").value = retVal;
    return retVal;
}

function copyPassword() {
    var password = document.getElementById("password");
    password.select();
    document.execCommand("Copy");
    alert("Copied the text: " + password.value);
}

function resetPassword() {
    document.getElementById("password").value = "Your Secure Password";
    document.getElementById("passwordLength").value = "";
    alert("Password Reset!");
}

function setInputFilter() {
    document.getElementById("passwordLength");
    return /^\d*\.?\d*$/.test(value);
    // Allow digits and '.' only, using a RegExp
  };

//   setInputFilter(document.getElementById("myTextBox"), function(value) {
//     return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
//   });

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }  

    return true;
}

