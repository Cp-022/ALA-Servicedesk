/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

function setAll(){
	jaNu = "De klant kan naar www.nu.nl maar ";
	neeNu = "De klant kan niet naar www.nu.nl maar ";
	jaRefresh = "de website reageert snel na het herladen.";
	neeRefresh = "de website reageert traag na het herladen.";
	reTrueNuTrue = "Alles werkt zoals het hoort, geen oplossing vereist.";
	reTrueNuFalse = "Herstart de router 1.";
	reFalseNuTrue = "Herstart de router 2.";
	reFalseNuFalse = "Herstart de router 3.";
	refresh = null;
	internet = null;
}

function klachtRun(){
	setAll();
	alert("klacht eh");
	nameAsk();
	modemAsk();
	internetAsk();
	oplossingPrintKlacht();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button>");
}

function storingRun(){
	alert("storing eh");
	nameAsk();
	modemAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button>");
}

function abnmtRun(){
	alert("abbo eh");
	nameAsk();
	modemAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button>");
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
	if (internet == true){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if (refresh == true){
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + jaNu + " " + jaRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
		else{
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + jaNu + " " + neeRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
	}
	else if(internet == false){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh == true){
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + neeNu + " " +  jaRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
		else if (refresh == false){
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + neeNu + " " +  neeRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
	}
}

function oplossingPrintKlacht(){
	if (internet == true){
		if(refresh == true){
			document.write("<p class = 'solve'><span class='pre-info'>Oplossing: </span>" + "<span id = 'solve'>" + reTrueNuTrue + "</span>" + "</p>");
		}
		else if(refresh == false){
			document.write("<p class = 'solve'><span class='pre-info'>Oplossing: </span>" + "<span id = 'solve'>" + reFalseNuTrue + "</span>" + "</p>");
		}
	}
	else if (internet == false){
		if(refresh == true){
			document.write("<p class = 'solve'><span class='pre-info'>Oplossing: </span>" + "<span id = 'solve'>" + reTrueNuFalse + "</span>" + "</p>");			
		}
	else if(refresh == false){
		document.write("<p class = 'solve'><span class='pre-info'>Oplossing: </span>" + "<span id = 'solve'>" + reFalseNuFalse + "</span>" + "</p>");
		}
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

function internetWijzig(){
	internet = confirm("Kan de klant naar nu.nl?");
	if (internet == true){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh == true){
			document.getElementById("internet").innerHTML =  jaNu + " " + jaRefresh + "</span>";
		}
		else if(refresh == false){
			document.getElementById("internet").innterHTML = jaNu + " " + neeRefresh + "</span>";
		}
	}
	else if(internet == false){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh == true){
			document.getElementById("internet").innerHTML =  neeNu + " " + jaRefresh + "</span>";
		}
		else if(refresh == false){
			document.getElementById("internet").innerHTML = neeNu + " " + neeRefresh + "</span>"
		}
	}
}