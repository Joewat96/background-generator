var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

console.log(button);

function changeBodybackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

button.addEventListener("click", function() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
});

color1.addEventListener("input", changeBodybackground);

color2.addEventListener("input", changeBodybackground);

