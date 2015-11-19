/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

/* Just a quick self note for whats what:
	hideAll -- hides all content until script is finshed
	jaNu -- prefix sentence of yes to the question of www.nu.nl
	neeNu -- prefix sentence of no to the question of www.nu.nl
	jaRefresh -- prefix sentence of yes to the question of F5 spam
	neeRefresh-- prefix sentence of no to the question of F5 spam
	reTrueNuTrue -- nu.nl is true and refresh is true
	reTrueNuFalse -- nu.nl is false and refresh is true
	reFalseNuTrue -- nu.nl is true and refresh is false
	reFalseNUFalse -- nu.nl is false and refresh is false
	setAll -- loads every lil pre made bit of code
	klachtRun -- runs the klacht procedure
	nameAsk -- asks for clients name
	modemAsk -- asks for clients modem
	internetAsk -- asks 2 questions ( F5 and nu.nl)
	oplossingPrintKlacht -- prints the result of the 2 questions
	datumAsk -- seeks the date 
	showAll -- reveals the page
	storingRun -- same as klachtRun but for storing
	abnmtRun -- same as klacht but for abbonement
	naam -- name of client
	NEED MORE EXPLAINATION
*/

function setAll(){
	hideAll();
	jaNu = "De klant kan naar www.nu.nl, ";
	neeNu = "De klant kan niet naar www.nu.nl, ";
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
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button></div>");
	showAll();
}

function storingRun(){
	alert("storing eh");
	nameAsk();
	modemAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button>");
	showAll();
}

function abnmtRun(){
	alert("abbo eh");
	nameAsk();
	modemAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button>");
	showAll();
}

function nameAsk() {
	naam = prompt("Geef de naam");
	if (naam.length < 1){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.write("<div id='scriptPrint'><p class = 'naam'><span class='pre-info'>Naam: </span>" + "<span id = 'naam'>" + naam + " </span>" + "<button id='naamwijzig' class='wijzig' onclick='naamWijzig()'>Wijzig</button></p>");
	}
}

function datumAsk() {
	datum = Date();
		document.write("<p class = 'datum'><span class='pre-info'>Datum: </span>" + datum + "</p>");
}

function modemAsk() {
	modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length < 1){
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

function callAsk(){
	call = prompt("Heeft u problemen met bellen?");
	if (call == true){
		toon = prompt("Hoort u de kiestoon als u op een getal drukt?");
		if (toon == true){
			callPhone = prompt("Kunt u bellen met bijvoorbeeld een mobiel nummer?");
			if (callPhone == true){
				
			}
		}
	}
	else if(call == false){
		
	}
}

function reset(){
	window.location.reload();
	/*This function is only meant for reloading the page A.K.A. restarting the script*/
}

function naamWijzig(){
	naam = prompt("Geef de naam");
	if (naam.length < 1){
		alert("Geen naam gegeven");
		nameAsk();
	}
	else {
		document.getElementById("naam").innerHTML = naam;	
	}
}

function modemWijzig(){
	modem = prompt("Wat voor type modem gebruikt de klant?");
	if (modem.length < 1){
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
			document.getElementById("internet").innerHTML = jaNu + " " + jaRefresh + "</span>";
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

function hideAll(){
	document.getElementById("container").style.cssText = "display:none;"	
}

function showAll(){
	document.getElementById("container").style.cssText = "display:show;"
}