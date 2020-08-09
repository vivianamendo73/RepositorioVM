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
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var Construccion = /** @class */ (function () {
    function Construccion(numeroPisos, direccion, datosCatasttrales, telefonoResponsable) {
        this.direccion = direccion;
        this.datosCatastrales = datosCatasttrales;
        this.telefonoResponsable = telefonoResponsable;
        this.numeroPisos = numeroPisos;
    }
    Construccion.prototype.SetDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Construccion.prototype.GetDireccion = function () {
        return this.direccion;
    };
    Construccion.prototype.SetDatosCatastrales = function (datosCatastrales) {
        this.datosCatastrales = datosCatastrales;
    };
    Construccion.prototype.GetDatosCatastrales = function () {
        return this.datosCatastrales;
    };
    Construccion.prototype.SetTelefonoResponsable = function (telefonoResponsable) {
        this.telefonoResponsable = telefonoResponsable;
    };
    Construccion.prototype.GetNumeroPisos = function () {
        return this.numeroPisos;
    };
    return Construccion;
}());
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(numeroPisos, nombreDueño, direccion, datosCatasttrales, telefonoResponsable) {
        var _this = _super.call(this, numeroPisos, direccion, datosCatasttrales, telefonoResponsable) || this;
        _this.nombreDueño = nombreDueño;
        return _this;
    }
    Casa.prototype.SetNombreDueño = function (nombreDueño) {
        this.nombreDueño = nombreDueño;
    };
    Casa.prototype.GetNombreDueño = function () {
        return this.nombreDueño;
    };
    Casa.prototype.ConstruirPlanta = function () {
        this.numeroPisos += 1;
    };
    return Casa;
}(Construccion));
var Edificio = /** @class */ (function (_super) {
    __extends(Edificio, _super);
    function Edificio(numeroPisos, nombreConsorcio, cantidadDepartamentos, direccion, datosCatasttrales, telefonoResponsable) {
        var _this = _super.call(this, numeroPisos, direccion, datosCatasttrales, telefonoResponsable) || this;
        _this.nombreConsorcio = nombreConsorcio;
        _this.cantidadDepartamentos = cantidadDepartamentos;
        return _this;
    }
    Edificio.prototype.SetNombreConsorcio = function (nombreConsorcio) {
        this.nombreConsorcio = nombreConsorcio;
    };
    Edificio.prototype.GetNombreConsorcio = function () {
        return this.nombreConsorcio;
    };
    Edificio.prototype.SetCantidadDepartamentos = function (cantidadDepartamentos) {
        this.cantidadDepartamentos = cantidadDepartamentos;
    };
    Edificio.prototype.GetCantidadDepartamentos = function () {
        return this.cantidadDepartamentos;
    };
    Edificio.prototype.ConstruirPiso = function () {
        this.numeroPisos += 1;
    };
    return Edificio;
}(Construccion));
var Construcciones = /** @class */ (function () {
    function Construcciones(nombre, cuil) {
        this.listaConstrucciones = new Array();
        this.nombre = nombre;
        this.cuil = cuil;
    }
    Construcciones.prototype.GetConstrucciones = function () {
        return this.listaConstrucciones;
    };
    Construcciones.prototype.AgregarCostruccion = function (construccion) {
        this.listaConstrucciones.push(construccion);
    };
    Construcciones.prototype.GetNombre = function () {
        return this.nombre;
    };
    Construcciones.prototype.SetNombre = function (nombre) {
        this.nombre = nombre;
    };
    Construcciones.prototype.GetCuil = function () {
        return this.cuil;
    };
    Construcciones.prototype.SetCuil = function (cuil) {
        this.cuil = cuil;
    };
    return Construcciones;
}());
function CargarCostrucciones(nombre, cuil) {
    var listado = new Construcciones(nombre, cuil);
    var textoDeArchivo = fs.readFileSync('Construcciones.txt', 'utf8');
    var construccion = textoDeArchivo.split('\r\n');
    for (var index = 0; index < construccion.length; index++) {
        var textoIntermedio = construccion[index];
        var edificacion = textoIntermedio.split(',');
        switch (edificacion[0]) {
            case "Casa":
                var casa = new Casa(Number(edificacion[1]), edificacion[2], edificacion[3], edificacion[4], Number(edificacion[5]));
                listado.AgregarCostruccion(casa);
                break;
            case "Edificio":
                var edificio = new Edificio(Number(edificacion[1]), edificacion[2], Number(edificacion[3]), edificacion[4], edificacion[5], Number(edificacion[6]));
                listado.AgregarCostruccion(edificio);
                break;
            default:
                break;
        }
    }
    return listado;
}
var nombre = ReadlineSync.question("Ingrese El nombre de la empresa  =   ");
var cuil = ReadlineSync.questionInt("Ingrese El cui de la empresa  =   ");
var empresaConstructora = new Construcciones(nombre, cuil);
empresaConstructora = CargarCostrucciones(nombre, cuil);
console.log(empresaConstructora);
