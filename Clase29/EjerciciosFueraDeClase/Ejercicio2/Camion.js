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
exports.Camion = void 0;
var AutomovilAbstract_1 = require("./AutomovilAbstract");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, patente, litrosNaftaTanque) {
        var _this = _super.call(this, marca, modelo, patente, litrosNaftaTanque) || this;
        _this.tieneAcoplado = false;
        return _this;
    }
    Camion.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Camion.prototype.cargarNafta = function () {
        this.litrosNaftaTanque += 65;
    };
    Camion.prototype.agregarAcoplado = function () {
        this.tieneAcoplado = true;
    };
    return Camion;
}(AutomovilAbstract_1.Automovil));
exports.Camion = Camion;
