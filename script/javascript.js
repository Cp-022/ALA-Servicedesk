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
		document.write("<p class = 'naam'><span class='pre-info'>Naam: </span>" + naam + "</p>");
	}
}

function datumAsk() {
	datum = Date();
	if (datum.length === 0){
		datum = Date();
	}
	else{
		document.write("<p class = 'datum'><span class='pre-info'>Datum: </span>" + datum + "</p>");
	}
}

function modemAsk() {
	modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length === 0){
		alert("Geef een geldige modem op");
		modemAsk();
	}
	else{
		document.write("<p class = 'modem'><span class='pre-info'>Modem: </span>" + modem + "</p>");
	}
}

function klachtAsk() {
	var klachtCheck = confirm("Heeft de klant een klacht?");
	if (klachtCheck = true){
		browsen = confirm("Kan de klant browsen naar www.nu.nl?");
		if (browsen = true){
			browskan = ("De klant kan naar www.nu.nl");
		}
		else{
			
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