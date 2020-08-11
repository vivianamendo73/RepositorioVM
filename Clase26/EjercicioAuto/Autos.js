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
var Auto_1 = require("./Auto");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.litrosNaftaTanque -= 5;
    };
    return AutoCarrera;
}(Auto_1.Auto));
var auto = new Auto_1.Auto('Ford', 'Fiesta');
var autoCarrera = new AutoCarrera('Ford', 'Mustang');
auto.acelerar();
autoCarrera.acelerar();
console.log(auto);
console.log(autoCarrera);
