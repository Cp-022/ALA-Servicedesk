/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

function klachtRun(){
	alert("klacht eh");
	nameAsk();
	modemAsk();
	internetAsk();
	datumAsk();
}

function storingRun(){
	alert("storing eh");
	nameAsk();
	datumAsk();
	modemAsk();
}

function abnmtRun(){
	alert("abbo eh");
	nameAsk();
	datumAsk();
	modemAsk();
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

function internetAsk() {
	internet = confirm("Kan de klant naar nu.nl?");
	if (internet = true){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh = true){
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + "De klant kan naar n.nl, en de pagina reageert snel als de klant op F5 drukt" + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
		else{
			/*add oplossing */
		}
	}
	else{
		/*add oplossing */
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