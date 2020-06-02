
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random_button")
var min = 0;
var max = 16777215;

setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
					+ color1.value
					+" , "
					+ color2.value
					+ " )";

	css.textContent = body.style.background;
}

function getRandom(){
	var number = Math.floor(Math.random() * (max - min + 1)) + min;
	return "#" + number.toString(16);
}

function generateColors(){
	color1.value = getRandom();
	color2.value = getRandom();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateColors);