function addF() {
    var table = document.getElementById("tab");
    var row = table.insertRow(table.rows.length);
	
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
	
    if (document.getElementById("0").value.length != 0 || document.getElementById("1").value.length != 0 || document.getElementById("2").value.length != 0) {
    col1.innerHTML = document.getElementById("0").value;
    col2.innerHTML = document.getElementById("1").value;
    col3.innerHTML = document.getElementById("2").value;
    } 
	else {
    col1.innerHTML = "404";
    col2.innerHTML = "404";
    col3.innerHTML = "404";
    }
} 