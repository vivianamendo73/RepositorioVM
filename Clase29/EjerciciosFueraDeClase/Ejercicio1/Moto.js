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
exports.Moto = void 0;
var AutomovilAbstract_1 = require("./AutomovilAbstract");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, patente, litrosNaftaTanque, cilindrada) {
        var _this = _super.call(this, marca, modelo, patente, litrosNaftaTanque) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    Moto.prototype.cargarNafta = function () {
        this.litrosNaftaTanque += 5;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(AutomovilAbstract_1.Automovil));
exports.Moto = Moto;
