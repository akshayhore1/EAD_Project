/**
 * Login validation
 */

var username = document.forms['myForm']['username'];
var password = document.forms['myForm']['password'];

var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', password_Verify);

function validated(){
    if (username.value != "admin") {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (password.value != "****") {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}
function username_Verify(){
    if (username.value == "admin") {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if (password.value == "****") {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}

