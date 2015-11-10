console.log (5+4)
alert("U start nu de log")
nameAsk();
datumAsk();
modemAsk();
function nameAsk() {
	var naam = prompt("Geef de naam");
	if (naam.length === 0){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.write('<span id="naam">');
		document.write(naam);
		document.write("</span>");
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
	var modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length === 0){
		alert("Geef een geldige modem op");
		modemAsk();
	}
	else{
		document.write(modem);
		document.write("<br>");
	}
}

function klachtAsk() {
	var klacht = prompt("Heeft de klant een klacht");
	if (klacht.length === 0){
		alert("Geef een geldige klacht op");
		klachtAsk();
	}
	else{
		document.write(klacht);
		document.write("<br>");
	}
}