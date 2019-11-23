// Declare variables that link to buttons in the html file
var generatePassword = document.querySelector("#generate");
var copyPassword = document.querySelector("#copy");
var resetPassword = document.querySelector("#reset");
// This method will be called when the user clicks on the 'generate password' button
// This method will return a string
generatePassword.addEventListener("click", function(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation();
    // When the method initiates, a pop-up window is displayed
    alert("Welcome to Password Generator");
    // Initial string values are assigned to the following variables 
    var charSet = "";
    var retVal = "";
    // An array is created with the different character sets the user can choose from
    // when generating the password
    var charSetArray = [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    ];
    // Confirms the developer that the array is being read by the browser and displays it in the console
    console.log(charSetArray);
    // A series of prompts determines which character sets are to be included in the password
    var lowercaseChar = confirm("Do you want Lowercase characters?");
    var uppercaseChar = confirm("Do you want Uppercase characters?");
    var numberChar = confirm("Do you want Numeric characters?");
    var specialChar = confirm("Do you want Special characters?");
    // Implemented a 'while loop' so that if no character set is chosen from the array, the
    // user will be notified and the series of prompts will repeat until the user has chosen
    // at least one character set
    while(lowercaseChar === false &&
    uppercaseChar === false &&
    numberChar === false &&
    specialChar === false) {
        alert("Error! Password must have at least one type of character set.");
        lowercaseChar = confirm("Do you want Lowercase characters?");
        uppercaseChar = confirm("Do you want Uppercase characters?");
        numberChar = confirm("Do you want Numeric characters?");
        specialChar = confirm("Do you want Special characters?");
    }
    // A series of 'IF statements' are used to add the selected array indexes to the
    // 'charSet' string. The user has to select ok when prompted in order for the array
    // index to be added to the 'charset' string
    if(lowercaseChar === true) {
        charSet += charSetArray[0];
    }
    if(uppercaseChar === true) {
        charSet += charSetArray[1];
    }
    if(numberChar === true) {
        charSet += charSetArray[2];
    }
    if(specialChar === true) {
        charSet += charSetArray[3];
    }
    // Confirms the developer that the 'charSet' has been created with the accumulated
    // character sets that the user has selected
    console.log(charSet);
    // Declares a variable that retrives the value from the password length textbox
    var passwordLength = document.getElementById("passwordLength").value;
    // Coverts the value in the password length input textBox to an integer
    var x = parseInt(passwordLength);
    // Implemented a 'while loop' so that if the number entered in the textbox is less than
    // 8 or greater than 128 or not a number, the user will be notified with a pop-up and
    // asked to re-enter a valid number
    while (x < 8 || x > 128 || isNaN(x)){
        alert("Error, Password Length TextBox has no value.");
        var passwordLength = prompt("Password must be at least 8 characters!");
        var x = parseInt(document.getElementById("passwordLength").value = passwordLength);
    }
    // Declaring a variable with the length of the selected 'charSet'
    var numSet = charSet.length;
    // Implemented a 'for loop' so that the browser will pick a random character from the
    // selected 'charSet' and add it to the 'retVal' string until the designated password
    // length has been reached
    for (var i = 0; i < passwordLength; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * numSet));
    }
    // Confirms the developer that the password has been created successfully
    console.log(retVal);
    // Places the value of the 'retVal' into the textArea
    var passwordValue = document.getElementById("password").value = retVal;
    // Returns the 'retVal' value so that it can be used if called within another function
    // and no code will be read after this line within this function
    return retVal;
});
// This method will be called when the user clicks on the 'copy to clipboard' button
copyPassword.addEventListener("click", function(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event.
    event.stopPropagation();
    // Declaring a variable that will retreive the value in the password generation textArea
    var password = document.getElementById("password");
    // This method selects the value in the password generation textArea
    password.select();
    // This method copies the value in the password generation textArea to the clipboard
    document.execCommand("Copy");
    // Notify the user with a pop-up window that the application has copied the value in
    // the password generation textArea
    alert("Copied the text: " + password.value);
});
//This method will be called when the user clicks on the 'reset' button
resetPassword.addEventListener("click", function(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event.
    event.stopPropagation();
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // Setting the value in the password generation textArea to empty
    document.getElementById("password").value = "";
    // Setting the value in the password length input textBox to empty
    document.getElementById("passwordLength").value = "";
    // Notify the user that the application has restarted to default with a pop-up window
    alert("Password Reset!");
});
// This method only allows numbers to be entered into the password length input textBox
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }  

    return true;
}
// function setInputFilter(event) {
//     event.preventDefault();
//     document.getElementById("passwordLength");
//     return /^\d*\.?\d*$/.test(value);
//     // Allow digits and '.' only, using a RegExp
// };

//   setInputFilter(document.getElementById("myTextBox"), function(value) {
//     return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
//   });