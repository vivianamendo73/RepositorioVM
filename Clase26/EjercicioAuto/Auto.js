"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.litrosNaftaTanque = 45;
    }
    Auto.prototype.acelerar = function () {
        this.litrosNaftaTanque -= 1;
    };
    Auto.prototype.GetListrosNafta = function () {
        return this.litrosNaftaTanque;
    };
    Auto.prototype.GetVelocidad = function () {
        return this.velocidad;
    };
    Auto.prototype.GetModelo = function () {
        return this.modelo;
    };
    Auto.prototype.GetMarca = function () {
        return this.marca;
    };
    return Auto;
}());
exports.Auto = Auto;
