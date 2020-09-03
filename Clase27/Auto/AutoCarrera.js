"use strict";
exports.__esModule = true;
var AutoCarrera = /** @class */ (function () {
    function AutoCarrera() {
        this.velocidadActual = 0;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarrera.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoCarrera;
}());
