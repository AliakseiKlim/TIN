window.onload = function () {
    setTimeout(function () {
        result();
    }, 5000); //the time is in milliseconds
};
function result() {
    document.getElementById("message").style.visibility = "visible";
}