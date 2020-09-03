"use strict";
exports.__esModule = true;
var Cuadrado_1 = require("./Cuadrado");
var Tablero = /** @class */ (function () {
    function Tablero(nombreJuego, numeroDeFichas, numeroDeParticipantes) {
        this.nombreJuego = nombreJuego;
        this.numeroDeFichas = numeroDeFichas;
        this.numeroDeParticipantes = numeroDeParticipantes;
        this.casilleros = new Array;
    }
    //Metodo privado que carga la variable casilleros asignandole un color de frma tal que queden intercalados 
    Tablero.prototype.cargarTablero = function (tamañoTablero, tamañoCasillero) {
        for (var i = 0; i < tamañoTablero; i++) {
            var fila = new Array(tamañoTablero);
            for (var j = 0; j < tamañoTablero; j++) {
                var casillero = new Cuadrado_1.Cuadrado(tamañoCasillero);
                var parImpar = i + j;
                parImpar = parImpar % 2;
                if (parImpar == 0) {
                    casillero.setColor('blanco');
                }
                else {
                    casillero.setColor('negro');
                }
                fila.push(casillero);
            }
            this.casilleros.push(fila);
        }
    };
    //Metodo publico que llama al metodo preivado solicitado en la consigna
    Tablero.prototype.armarTablero = function (tamañoTablero, tamañocCasillero) {
        this.cargarTablero(tamañoTablero, tamañocCasillero);
        console.log("TableroTerminado");
    };
    Tablero.prototype.getNumFichas = function () {
        return this.numeroDeFichas;
    };
    Tablero.prototype.getNumParticipantes = function () {
        return this.numeroDeParticipantes;
    };
    Tablero.prototype.getCasilleros = function () {
        return this.casilleros;
    };
    return Tablero;
}());
//El Usuario ingresara por teclado las caracteristicas del juego.
var nombreJuego = "Ajedrez";
var cantidaFichas = 20;
var cantidadDeJugadores = 4;
//creo una instancia de Tablero
var tablero = new Tablero(nombreJuego, cantidaFichas, cantidadDeJugadores);
var tamañoTablero = 4;
var tamañoCasillero = 2;
tablero.armarTablero(tamañoTablero, tamañoCasillero);
console.log(tablero);
