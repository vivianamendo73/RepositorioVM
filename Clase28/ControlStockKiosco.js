"use strict";
exports.__esModule = true;
var Item_1 = require("./Item");
var fs = require("fs");
var ReadlineSync = require("readline-sync");
var ControlStock = /** @class */ (function () {
    function ControlStock() {
        this.listaItemsStock = [];
        this.listaItemsVendidos = [];
        this.cargarLista();
    }
    ControlStock.prototype.cargarLista = function () {
        var textoDeArchivo = fs.readFileSync('ItemsStock.txt', 'utf8');
        var items = textoDeArchivo.split('\r\n');
        for (var index = 0; index < items.length; index++) {
            var itemText = items[index];
            var item = itemText.split(' ');
            var producto = new Item_1.Item(item[0], Number(item[1]));
            this.listaItemsStock.push(producto);
        }
    };
    ControlStock.prototype.encontrarItem = function (nombre) {
        var item;
        for (var index = 0; index < this.listaItemsStock.length; index++) {
            item = this.listaItemsStock[index];
            if (item.getNombre() == nombre) {
                return index;
            }
        }
        return -1;
    };
    ControlStock.prototype.vender = function (producto) {
        var indice = this.encontrarItem(producto);
        console.log(this.listaItemsStock);
        console.log(this.listaItemsVendidos);
        if (indice != -1) {
            var item = this.listaItemsStock[indice];
            this.listaItemsStock.splice(indice, 1);
            this.listaItemsVendidos.push(item);
            console.log(this.listaItemsStock);
            console.log(this.listaItemsVendidos);
        }
    };
    ControlStock.prototype.comprar = function (nombre, costo) {
        var item = new Item_1.Item(nombre, costo);
        this.listaItemsStock.push(item);
    };
    ControlStock.prototype.imprimir = function () {
        var texto = '';
        for (var index = 0; index < this.listaItemsVendidos.length; index++) {
            var item = this.listaItemsVendidos[index];
            var cadena = new Array();
            cadena = Object.values(item);
            texto = texto + cadena.toString() + '\r\n';
        }
        fs.writeFile('itemVendidos.txt', texto, function (err) {
            // If an error occurred, show it and return
            if (err)
                return console.error(err);
            // Successfully wrote to the file!
        });
    };
    return ControlStock;
}());
var kiosko = new ControlStock();
var sigo = true;
while (sigo) {
    var accion = ReadlineSync.questionInt("Ingrese 1 si desea comprar un producto, 2 si desea vender y 0 si desea salir   =   ");
    var nombreProducto = void 0;
    var costo = void 0;
    switch (accion) {
        case 1:
            nombreProducto = ReadlineSync.question("Ingrese El nombre del producto que desea comprar   =   ");
            costo = ReadlineSync.questionInt("Ingrese El costo del producto que desea comprar   =   ");
            kiosko.comprar(nombreProducto, costo);
            break;
        case 2:
            nombreProducto = ReadlineSync.question("Ingrese El nombre del producto que desea vender   =   ");
            kiosko.vender(nombreProducto);
            break;
        case 0:
            sigo = false;
            kiosko.imprimir();
            break;
        default:
            break;
    }
}
