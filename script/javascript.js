alert("U start nu de log")
nameAsk();
datumAsk();
modemAsk();
klachtAsk();
function nameAsk() {
	naam = prompt("Geef de naam");
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
	datum = prompt("Geef de datum (dd-mm-jjjj)");
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
	modem = prompt("Wat voor type modem gebruikt de klant?");
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
	var klachtCheck = confirm("Heeft de klant een klacht?");
	if (klachtCheck = true){
		browsen = confirm("Kunt u browsen naar www.nu.nl?");
		if (browsen = true){
			browskan = ("De klant kan naar www.nu.nl");
			document.write("De klant heeft geen problemen");
			document.write("<br>");
			document.write("de gegevens zijn: <br>");
			document.write(naam+datum+modem+browskan);
		}
		else{
			document.write("<br>");
		}
	}
	else{
		
	}
}