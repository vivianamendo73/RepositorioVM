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
exports.AutoCiudad = void 0;
var Vehiculo_1 = require("./Vehiculo");
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return AutoCiudad;
}(Vehiculo_1.Auto));
exports.AutoCiudad = AutoCiudad;
