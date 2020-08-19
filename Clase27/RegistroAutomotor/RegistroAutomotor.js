"use strict";
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
//crea base de datos
var registro = new RegistroAutomotor();
//carga base de datos con datos iniciales
registro = CargarRegistro();
var auto = new Auto_1.Auto('Renault', 'Megane', 'OLZ245', 55);
//modificabase de datos agregando un auto
registro.agregarAutomovil(auto);
registro.ImprimirArchivo();
