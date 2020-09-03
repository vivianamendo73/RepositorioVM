"use strict";
exports.__esModule = true;
exports.Automovil = void 0;
var Automovil = /** @class */ (function () {
    function Automovil(marca, modelo, patente, litrosNaftaTanque) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.velocidadActual = 0;
        this.cantidadRuedas = 4;
        this.litrosNaftaTanque = litrosNaftaTanque;
    }
    Automovil.prototype.getMarca = function () {
        return this.marca;
    };
    Automovil.prototype.getModelo = function () {
        return this.modelo;
    };
    Automovil.prototype.getPatente = function () {
        return this.patente;
    };
    return Automovil;
}());
exports.Automovil = Automovil;
