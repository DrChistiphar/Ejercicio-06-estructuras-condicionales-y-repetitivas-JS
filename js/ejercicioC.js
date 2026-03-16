console.log("Ejercicio C")

var cantidadGatos = 10;
var cantidadPasos = 5;

for(var i = 0; i < cantidadGatos; i++) {
    console.log("Gato #" + i+ ":" + ((i%1)%2 == 0? "🐈" : "🐈⬛") + "🐾".repeat(cantidadPasos))
}
console.log("")


