"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cuadrado = void 0;
var Rectangulo_1 = require("./Rectangulo");
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(lado) {
        var _this = _super.call(this, lado, lado) || this;
        _this.ocupado = false;
        return _this;
    }
    //Polimorfismo:redefine el metodo area
    Cuadrado.prototype.area = function () {
        return Math.pow(this.getBase(), 2);
    };
    //Metodo que modifica la variable protected color
    Cuadrado.prototype.setColor = function (color) {
        this.color = color;
    };
    Cuadrado.prototype.jugadaSobreCasillero = function () {
        if (this.ocupado) {
            this.ocupado = false;
        }
        else {
            this.ocupado = true;
        }
    };
    return Cuadrado;
}(Rectangulo_1.Rectangulo));
exports.Cuadrado = Cuadrado;
