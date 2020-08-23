"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(nombreItem, costo) {
        this.nombreItem = nombreItem;
        this.costo = costo;
    }
    Item.prototype.getNombre = function () {
        return this.nombreItem;
    };
    Item.prototype.setNombre = function (nombreItem) {
        this.nombreItem = nombreItem;
    };
    Item.prototype.getCosto = function () {
        return this.costo;
    };
    Item.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    return Item;
}());
exports.Item = Item;
