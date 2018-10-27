var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomInput");

var hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {	
	var color = "#";
	for(var i = 0; i < 6; i++){
		color += hex[Math.floor(Math.random() * 15)];
	}
	return color;
}

function randomizeInputColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeInputColors);