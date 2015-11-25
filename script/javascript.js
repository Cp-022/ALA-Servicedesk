/*Made by Cp any use of copy/paste of this code WILL be reported to the copy n paste police!!, no seriously
feel free to copy my code but PLEASE JUST GIVE ME CREDIT -__- Have a nice day*/

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
	datum =  new Date();
	problem = "";
}

function klachtRun(){
	setAll();
	sayHello();
	nameAsk();
	modemAsk();
	internetAsk();
	oplossingPrintKlacht();
	problemPrint();
	callAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button></div>");
	showAll();
}

function storingRun(){
	setAll();
	sayHello();
	nameAsk();
	modemAsk();
	internetAsk();
	oplossingPrintKlacht();
	callAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button></div>");
	showAll();
}

function abnmtRun(){
	setAll();
	sayHello();
	nameAsk();
	modemAsk();
	internetAsk();
	oplossingPrintKlacht();
	callAsk();
	datumAsk();
	document.write("<button class = 'button' onclick = 'reset()' id = 'reset'>Herstart</button></div>");
	showAll();
}

function sayHello() {
	var n = datum.getHours();
	if (n === 12 || n < 12){
		alert("Goedemorgen!");
	}
	else if (n > 18 || n === 18){
		alert("Goedenavond!");
	}
	else{
		alert("Goedemiddag!");
	}
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
			problem += "Herhalend F5 drukken";
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + jaNu + " " + neeRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
	}
	else if(internet == false){
		problem += "www.nu.nl";
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh == true){
			document.write("<p class = 'internet'><span class='pre-info'>Internet: </span>" + "<span id = 'internet'>" + neeNu + " " +  jaRefresh + "</span>" + "<button id='naamwijzig' class='wijzig' onclick='internetWijzig()'>Wijzig</button></p>");
		}
		else if (refresh == false){
			problem += "Herhalend F5 drukken";
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

function problemPrint(){
	document.write("<p class = 'probleem' <span class='pre-info'>Problemen: </span>" + "<span id = 'problem'>" + problem + "</span>" + "</p>");
}

function callAsk(){
	call = confirm("Heeft u problemen met bellen?");
	if (call == true){
		toon = confirm("Hoort u de kiestoon als u op een getal drukt?");
		if (toon == true){
			callPhone = confirm("Kunt u bellen met bijvoorbeeld een mobiel nummer?");
			if (callPhone == true){
				/* document.write */
				tvAsk();
			}
			else if (callPhone == false){
				problem += "Kan niet bellen met een mobiel nummer";
				tvAsk();
			}
		}
		else if(toon == false){
			problem += "Hoort geen kiestoon";
			/*document.write */
			tvAsk();
		}
	}
	else if(call == false){
		/*document.write */
		tvAsk();
	}
}

function tvAsk(){
	tv = confirm("Heeft u problemen met de TV");
	if (tv == true){
		funAmmountTv();
		problem += "Heeft problemen met de TV";
	}
	else if (tv == false){
		/*document.write */
	}
}

function funAmmountTv(){
	ammountTv = prompt("Hoeveel TV's heeft de klant?");
	if (ammountTv.length < 1){
		alert("Geef een geldig getal op");
		funAmmountTv();
	}
	else{
		/*document.write*/
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
			problem += "Herhalend F5 drukken";
			document.getElementById("internet").innterHTML = jaNu + " " + neeRefresh + "</span>";
		}
	}
	else if(internet == false){
		refresh = confirm("Laadt de pagina snel als u vaak op F5 drukt?");
		if(refresh == true){
			document.getElementById("internet").innerHTML =  neeNu + " " + jaRefresh + "</span>";
		}
		else if(refresh == false){
			problem += "Herhalend F5 drukken";
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

document.onkeypress = function (r) {
    r = r || window.event;
	window.location.reload();
};