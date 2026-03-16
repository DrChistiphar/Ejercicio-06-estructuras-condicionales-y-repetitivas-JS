console.log("Ejercicio A")

var cantidadGatos = 10;
var emojis = ["😺","😸","😹"]

for(var i = 1; i <= cantidadGatos; i++) {
    var emoji = emojis[(i-1) % emojis.length];
    console.log("Gato #" + i + ": " + emoji);
}