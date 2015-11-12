/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

alert("U start nu de log")
loadTable();
nameAsk();
datumAsk();
modemAsk();
klachtAsk();

function loadTable() {
	belReden0 = "klacht";
	belReden1 = "abbonement";
	belReden2 = "informatie";
}

function nameAsk() {
	naam = prompt("Geef de naam");
	if (naam.length === 0){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.write("<p class = 'naam'><span class='pre-info'>Naam: </span>" + "<span id = 'naam'>" + naam + " </span>" + "<button id='naamwijzig' class='wijzig' onclick='naamWijzig()'>Wijzig</button></p>");
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
		document.write("<p class = 'modem'><span class='pre-info'>Modem: </span>" + "<span id = 'modem'>" + modem + " </span>" + "<button id='naamwijzig' class='wijzig' onclick='modemWijzig()'>Wijzig</button></p>");
	}
}

function klachtAsk() {
	klachtCheck = prompt("Waarom belt de klant");
	klachtCheck = klachtCheck.toLowerCase();
	if (klachtCheck === belReden0){
		browsen = confirm("Kan de klant browsen naar www.nu.nl?");
		if (browsen = true){
			browskan = ("De klant kan naar www.nu.nl");
		}
	}
	else if(klachtCheck === belReden1) {
		/*EMPTY*/	
	}
	else if(klachtCheck === belReden2) {
		/*EMPTY*/	
	}
	else{
		alert("Geef een geldige klacht op");
		klachtAsk();
	}
}

function reset(){
	window.location.reload();
	/*This function is only meant for reloading the page A.K.A. restarting the script*/
}

function naamWijzig(){
	naam = prompt("Geef de naam");
	if (naam.length === 0){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.getElementById("naam").innerHTML = naam;	
	}
}

function modemWijzig(){
	modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length === 0){
		alert("Geef een geldige modem op");
		modemAsk();
	}
	else{
		document.getElementById("modem").innerHTML = modem;	
	}
}