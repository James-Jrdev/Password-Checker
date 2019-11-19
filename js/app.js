
function validPass() {
    //Checks length
    var password = document.getElementById("pword");
    if (password.value =="") {
        alert("Please input password.");
        return false;
    } else {
        true;
    }

    //Checks Length
    if (password.value.length < 8) {
        alert("Password must be at least 8 chars long please.");
        return false;
    } else {
        true;
        // document.getElementById("pwc1").style.color = "green";
    }

    //Checks Lowercase
    var lowerCase = /[a-z]/g;
    if (password.value.match(lowerCase) < 1) {
        alert("Password must have at least 1 lowercase letter please.");
        return false;
    } else {
        true;
        // document.getElementById("pwc1").style.color = "green";
    }

    //Checks Uppercase
    var upperCase = /[A-Z]/g;
    if (password.value.match(upperCase) < 1) {
        alert("Password must have at least 1 uppercase letter please.");
        return false;
    } else {
        true;
        // document.getElementById("pwc1").style.color = "green";
    }

    //Check Numbers
    var numbers = /[0-9]/;
    if (password.value.match(numbers) < 1) {
        alert("Password must have at least 1 number please.");
        return false;
    } else {
        true;
        // document.getElementById("pwc1").style.color = "green";
    }
    
    // // Check Special Chars
    // var spaces = /^\S/;
    // if (password.value.match(spaces) == 0) {
    //     return false;
    // } else {
    //     alert("Please do not put spaces in your password.");
    //     true;
    // }
}

