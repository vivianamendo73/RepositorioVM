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
var persona_1 = require("./persona");
var PersonaSedentaria = /** @class */ (function (_super) {
    __extends(PersonaSedentaria, _super);
    function PersonaSedentaria(nombre, edad, presionMax, presionMin, frecuenciaCardiaca) {
        return _super.call(this, nombre, edad, presionMax, presionMin, frecuenciaCardiaca) || this;
    }
    PersonaSedentaria.prototype.correr = function () {
        this.frecuenciaCardiaca += 30;
    };
    return PersonaSedentaria;
}(persona_1.Persona));
var PersonaDeportista = /** @class */ (function (_super) {
    __extends(PersonaDeportista, _super);
    function PersonaDeportista(nombre, edad, presionMax, presionMin, frecuenciaCardiaca) {
        return _super.call(this, nombre, edad, presionMax, presionMin, frecuenciaCardiaca) || this;
    }
    PersonaDeportista.prototype.correr = function () {
        this.frecuenciaCardiaca += 5;
    };
    return PersonaDeportista;
}(persona_1.Persona));
var sedentario = new PersonaSedentaria("Viviana", 47, 8, 5, 95);
var deportista = new PersonaDeportista("Cecilia", 48, 10, 7, 95);
sedentario.correr();
deportista.correr();
console.log(sedentario);
console.log(deportista);
