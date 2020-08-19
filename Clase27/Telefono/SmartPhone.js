"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("Llamando a" + numero + " ahora.");
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("Sacando una foto");
    };
    return SmartPhone;
}());
