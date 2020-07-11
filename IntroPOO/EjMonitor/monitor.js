var Monitor = /** @class */ (function () {
    function Monitor(brilloActual, pulgadas) {
        this.brilloActual = brilloActual;
        this.pulgadas = pulgadas;
        this.estaPrendido = false;
    }
    Monitor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Monitor.prototype.subirBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Monitor.prototype.bajarBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.establecerPulgadas = function (pulgadas) {
        this.pulgadas = pulgadas;
    };
    return Monitor;
}());
var brilloActual = 10;
var pulgadas = 24;
var miMonitor = new Monitor(brilloActual, pulgadas);
console.log(miMonitor);
miMonitor.prenderApagar();
miMonitor.subirBrillo();
console.log(miMonitor);
