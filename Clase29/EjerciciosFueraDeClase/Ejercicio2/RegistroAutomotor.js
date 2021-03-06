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
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var Auto_1 = require("./Auto");
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.listaAutomotores = [];
    }
    RegistroAutomotor.prototype.getAutos = function () {
        return this.listaAutomotores;
    };
    RegistroAutomotor.prototype.agregarAutomovil = function (auto) {
        this.listaAutomotores.push(auto);
    };
    RegistroAutomotor.prototype.ImprimirArchivo = function () {
        var texto = '';
        for (var index = 0; index < this.listaAutomotores.length; index++) {
            var vehiculo = this.listaAutomotores[index];
            var cadena = new Array();
            cadena = Object.values(vehiculo);
            texto = texto + cadena.toString() + '\r\n';
        }
        fs.writeFile('VehiculosSalida.txt', texto, function (err) {
            // If an error occurred, show it and return
            if (err)
                return console.error(err);
            // Successfully wrote to the file!
        });
    };
    return RegistroAutomotor;
}());
function CargarRegistro() {
    var registro = new RegistroAutomotor();
    var textoDeArchivo = fs.readFileSync('Vehiculos.txt', 'utf8');
    if (textoDeArchivo == '') {
        throw new ErrorRegistroAutomotor('El archivo esta vacío');
    }
    var vehiculos = textoDeArchivo.split('\r\n');
    for (var index = 0; index < vehiculos.length; index++) {
        var textoIntermedio = vehiculos[index];
        var vehiculo = textoIntermedio.split(' ');
        switch (vehiculo[0]) {
            case "Auto":
                var auto_1 = new Auto_1.Auto(vehiculo[1], vehiculo[2], vehiculo[3], Number(vehiculo[4]));
                registro.agregarAutomovil(auto_1);
                break;
            case "Moto":
                var moto = new Moto_1.Moto(vehiculo[1], vehiculo[2], vehiculo[3], Number(vehiculo[4]), Number(vehiculo[5]));
                registro.agregarAutomovil(moto);
                break;
            case "Camion":
                var camion = new Camion_1.Camion(vehiculo[1], vehiculo[2], vehiculo[3], Number(vehiculo[4]));
                registro.agregarAutomovil(camion);
                break;
            default:
                break;
        }
    }
    return registro;
}
var ErrorRegistroAutomotor = /** @class */ (function (_super) {
    __extends(ErrorRegistroAutomotor, _super);
    function ErrorRegistroAutomotor(message) {
        var _this = _super.call(this, message) || this;
        _this.name = ErrorRegistroAutomotor.name; // (2)
        return _this;
    }
    return ErrorRegistroAutomotor;
}(Error));
//crea base de datos
var registro = new RegistroAutomotor();
//carga base de datos con datos iniciales
//registro = CargarRegistro();
try {
    registro = CargarRegistro();
}
catch (error) {
    console.log('Ocurrió un error esperado : ' + error + ".");
}
var auto = new Auto_1.Auto('Renault', 'Megane', 'OLZ245', 55);
//modificabase de datos agregando un auto
registro.agregarAutomovil(auto);
registro.ImprimirArchivo();
