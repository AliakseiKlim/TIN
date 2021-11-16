

//errors and right usage
function EmailError() {
    
    document.getElementById("0").style.color = "red";
    document.getElementById("0").style.borderColor = "red";
}
function digitsError() {
    document.getElementById("1").style.color = "red";
    document.getElementById("1").style.borderColor = "red";
}
function EmailOK() {
    document.getElementById("0").style.color = "green";
    document.getElementById("0").style.borderColor = "green";  
}
function digitsOK() {
    document.getElementById("1").style.color = "green";
    document.getElementById("1").style.borderColor = "green"; 
}

//resets
function reset() {
    resetColor();
    document.getElementById("0").value = "";
    document.getElementById("1").value = "";
}
function resetColor() {
    document.getElementById("0").style.color = "black";
    document.getElementById("1").style.color = "black";
    document.getElementById("0").style.borderColor = "black";
    document.getElementById("1").style.borderColor = "black";
}

//validations
function validateF() {
    var email = document.getElementById("0").value;
    var digits = document.getElementById("1").value;
    if (!validateEmail(email)) EmailError();
    else EmailOK();
    if (!validatedigits(digits)) digitsError();
    else digitsOK();
}


function validateEmail(email) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(String(email).toLowerCase());
}

function validatedigits(digits) {
    var re = /^\d+$/;
    return re.test(String(digits).toLowerCase());
}