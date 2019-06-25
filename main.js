//variabler for h3 og class for inputtene, og for body
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

// endrer bakgrunnen til css gradient med
// fargekode fra color-value, legger ut
// fargekoden i css(h3)
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

//Color1 og 2 venter på input og endrer så med functionen
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Show colorcode when first loaded
setGradient();

//Lager random hex-fargekode ved å legge til #,
// så et symbol fra letters til color 6 ganger
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; //Gir et tall i tabellen letters fra 0-15
  }
  return color;
}

//endrer fargevalue til random, så settes de
function setRandomColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

//på click på randombtn = random background-color
randomBtn.addEventListener("click", setRandomColor);