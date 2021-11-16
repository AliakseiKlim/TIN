
function result(far, cel) {
    far = parseFloat(far);
    cel = parseFloat(cel);
	
    document.getElementById("res0").innerHTML=((far - 32) / 1.8).toFixed(2);
    document.getElementById("res1").innerHTML=((cel * 9 / 5) + 32).toFixed(2);
}

document.getElementById("button").addEventListener("click", function () {
    var far = document.getElementById("fill0").value;
    var cel = document.getElementById("fill1").value;
    result(far, cel);
});