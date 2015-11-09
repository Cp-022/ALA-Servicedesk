console.log (5+4)
alert("U start nu de log")
nameAsk();
datumAsk();
function nameAsk() {
	var naam = prompt("Geef de naam");
	if (naam.length === 0){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.write(naam);
		document.write("<br>");
	}
}

function datumAsk() {
	var datum = prompt("Geef de datum (dd-mm-jjjj)");
	if (datum.length <= 9) {
		alert("Geef een geldige datum op");
		datumAsk();
	}
	else{
		document.write(datum);
		document.write("<br>");
	}
}

function modemAsk() {
	
}