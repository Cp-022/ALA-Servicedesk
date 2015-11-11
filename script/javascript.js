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
		document.write("<p>Naam:" + naam + "</p>" + "<br>");
	}
}

function datumAsk() {
	datum = prompt("Geef de datum (dd-mm-jjjj)");
	if (datum.length <= 9) {
		alert("Geef een geldige datum op");
		datumAsk();
	}
	else{
		document.write("<p>Datum:" + datum + "</p>"+ "<br>");
	}
}

function modemAsk() {
	modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length === 0){
		alert("Geef een geldige modem op");
		modemAsk();
	}
	else{
		document.write("<p>Modem:" + modem + "</p>" + "<br>");
	}
}

function klachtAsk() {
	var klachtCheck = confirm("Heeft de klant een klacht?");
	if (klachtCheck = true){
		browsen = confirm("Kunt u browsen naar www.nu.nl?");
		if (browsen = true){
			browskan = ("De klant kan naar www.nu.nl");
			document.write("<p>De klant heeft geen problemen</p><br> <p>de gegevens zijn : </p> <br>" + "<p>" + naam+datum+modem+browskan+ "</p>" );
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
	/*This function is only meant for reloading the page A.K.A. restarting the script*/
}