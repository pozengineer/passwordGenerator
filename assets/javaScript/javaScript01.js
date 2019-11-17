// const generate = document.getElementById("generate");
// const password = document.getElementById("password");
            
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
    
    var userInput = prompt("Please select type of password\n1. Letters\n2. Letters/ Numbers\n3. Letter/ Number/ Special");
    // var passwordLength = prompt("Please enter length of Password");
    // var option = parseInt(userInput);
    // var length = parseInt(passwordLength);
    
    while (userInput != null) {
        if (userInput == 1) {
            var passwordLength = prompt("Please enter length of Password");

            while (passwordLength < 0 || passwordLength > 128){
                alert("Error, Invalid number!");
                passwordLength = prompt("Enter positive number");
            }

            var charSet01 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var numSet = charSet01.length;
            
            for (var i = 0; i < passwordLength; i++) {
            retVal += charSet01.charAt(Math.floor(Math.random() * numSet));
            }

            console.log(retVal);
            document.getElementById("password").value = retVal;
            return retVal;
        }
        else if (userInput == 2) {
            passwordLength = prompt("Please enter length of Password");

            while (passwordLength < 0 || passwordLength > 128){
                alert("Error, Invalid number!");
                passwordLength = prompt("Enter positive number");
            }

            var charSet02 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            numSet = charSet02.length;

            for (var i = 0; i < passwordLength; i++) {
            retVal += charSet02.charAt(Math.floor(Math.random() * numSet));
            }

            console.log(retVal);
            document.getElementById("password").value = retVal;
            return retVal;
        }
        else if (userInput == 3) {
            passwordLength = prompt("Please enter length of Password");

            while (passwordLength < 0 || passwordLength > 128){
                alert("Error, Invalid number!");
                passwordLength = prompt("Enter positive number");
            }

            var charSet03 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            numSet = charSet03.length;
            
            for (var i = 0; i < passwordLength; i++) {
            retVal += charSet03.charAt(Math.floor(Math.random() * numSet));
            }

            console.log(retVal);
            document.getElementById("password").value = retVal;
            return retVal;
        }
        else {
            alert("Error! Invalid input! Enter number 1, 2, or 3");
        }
        userInput = prompt("Please select type of password\n1. Letters\n2. Letters/ Numbers\n3. Letter/ Number/ Special");
    }
}

function copyPassword () {
    var password = document.getElementById("password");
    password.select();
    document.execCommand("Copy");
    alert("Copied the text: " + password.value);
}

function resetPassword () {
    document.getElementById("password").value = "Your Secure Password";
    alert("Password Reset!");
}