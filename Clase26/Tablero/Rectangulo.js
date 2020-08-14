"use strict";
exports.__esModule = true;
exports.Rectangulo = void 0;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
        this.color = 'blanco';
    }
    Rectangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.getColor = function () {
        return this.color;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
