"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, presionMax, presionMin, frecuenciaCardiaca) {
        this.nombre = nombre;
        this.edad = edad;
        this.presionMax = presionMax;
        this.presionMin = presionMin;
        this.frecuenciaCardiaca = frecuenciaCardiaca;
    }
    Persona.prototype.cumplirAños = function () {
        this.edad += 1;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getPresionMax = function () {
        return this.presionMax;
    };
    Persona.prototype.getPresionMin = function () {
        return this.presionMin;
    };
    Persona.prototype.getFrecuenciaCardiaca = function () {
        return this.frecuenciaCardiaca;
    };
    Persona.prototype.correr = function () {
        this.frecuenciaCardiaca += 10;
    };
    return Persona;
}());
exports.Persona = Persona;
