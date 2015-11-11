/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

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
		document.write("<p>Naam:" + naam + "</p>");
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
		document.write("<p>Datum:" + datum + "</p>");
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
		document.write("<p>Modem:" + modem) + "</p>";
		document.write("<br>");
	}
}

function klachtAsk() {
	var klachtCheck = confirm("Heeft de klant een klacht?");
	if (klachtCheck = true){
		browsen = confirm("Kunt u browsen naar www.nu.nl?");
		if (browsen = true){
			browskan = ("<p>De klant kan naar www.nu.nl</p>");
			document.write("<p>De klant heeft geen problemen</p> <br> <p> de gegevens zijn</p> <br> <p>de gegevens zijn : </p> <br>");
			document.write("<br>");
			document.write("<p> de gegevens zijn:</p> <br>");
			document.write("<p>" + naam+datum+modem+browskan+ "</p>" );
		}
		else{
			/*EMPTY*/
		}
	}
	else{
		/*EMPTY*/
	}
}

function reset(){
	window.location.reload();
}