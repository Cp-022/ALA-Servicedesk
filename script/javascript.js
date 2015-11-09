console.log (5+4)
alert("U start nu de log")
nameAsk();
function nameAsk() {
	var naam = prompt("Geef de naam");
	if (naam.length === 0){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.write(naam);
	}
}