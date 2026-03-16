console.log("Ejercicio B")

var cantidadGatos = 5;
var cantidadPasos = 3;

for (var i = 1; i <= cantidadGatos; i++) {
    let emojis = "🐈"
    for (var j = 1; j <= cantidadPasos; j++) {
        emojis += "🐾"
    }
    console.log("Gato #" + i + ": " + emojis);
}