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
exports.Auto = void 0;
var AutomovilAbstract_1 = require("./AutomovilAbstract");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, patente, litrosNaftaTanque) {
        var _this = _super.call(this, marca, modelo, patente, litrosNaftaTanque) || this;
        _this.cantidadRuedas = 4;
        return _this;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    Auto.prototype.cargarNafta = function () {
        this.litrosNaftaTanque += 5;
    };
    return Auto;
}(AutomovilAbstract_1.Automovil));
exports.Auto = Auto;
