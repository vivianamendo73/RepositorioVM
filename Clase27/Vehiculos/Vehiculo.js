"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Auto.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Auto.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports.Auto = Auto;
