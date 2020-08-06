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
var Automovil = /** @class */ (function () {
    function Automovil(marca, patente) {
        this.marca = marca;
        this.patente = patente;
        this.cantidadRuedas = 4;
    }
    Automovil.prototype.GetMarca = function () {
        return this.marca;
    };
    Automovil.prototype.GetPatente = function () {
        return this.patente;
    };
    Automovil.prototype.publicGetCantRuedas = function () {
        return this.cantidadRuedas;
    };
    return Automovil;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, patente) {
        var _this = _super.call(this, marca, patente) || this;
        _this.cantidadRuedas = 2;
        return _this;
    }
    return Moto;
}(Automovil));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, patente) {
        var _this = _super.call(this, marca, patente) || this;
        _this.cantidadRuedas = 16;
        return _this;
    }
    return Camion;
}(Automovil));
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaAutos = new Array();
    }
    RegistroAutomotor.prototype.GetAutos = function () {
        return this.listaAutos;
    };
    RegistroAutomotor.prototype.AgregarAutomovil = function (auto) {
        this.listaAutos.push(auto);
    };
    return RegistroAutomotor;
}());
function CargarRegistro() {
    var registro = new RegistroAutomotor();
    var textoDeArchivo = fs.readFileSync('Vehiculos.txt', 'utf8');
    var vehiculos = textoDeArchivo.split('\r\n');
    for (var index = 0; index < vehiculos.length; index++) {
        var textoIntermedio = vehiculos[index];
        var vehiculo = textoIntermedio.split(' ');
        switch (vehiculo[0]) {
            case "Auto":
                var auto = new Automovil(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(auto);
                break;
            case "Moto":
                var moto = new Moto(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(moto);
                break;
            case "Camion":
                var camion = new Camion(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(camion);
                break;
            default:
                break;
        }
    }
    return registro;
}
var registro = new RegistroAutomotor();
registro = CargarRegistro();
console.log(registro);
