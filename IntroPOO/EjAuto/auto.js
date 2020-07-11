var Auto = /** @class */ (function () {
    function Auto(colorActual) {
        this.velocidadActual = 0;
        this.kilometrajeActual = 0;
        this.estaEncendido = false;
        this.cambioActual = 0;
        this.colorActual = colorActual;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaEncendido)
            this.estaEncendido = false;
        else
            this.estaEncendido = true;
    };
    Auto.prototype.subirCambio = function () {
        this.cambioActual = this.cambioActual + 1;
    };
    Auto.prototype.bajarCambio = function () {
        this.cambioActual = this.cambioActual - 1;
    };
    Auto.prototype.subirVelocidad = function () {
        this.velocidadActual = this.velocidadActual + 1;
    };
    Auto.prototype.bajarVelocidad = function () {
        this.velocidadActual = this.velocidadActual - 1;
    };
    Auto.prototype.elegirVelocidad = function (velocidad) {
        this.velocidadActual = velocidad;
    };
    Auto.prototype.cambiarColor = function (color) {
        this.colorActual = color;
    };
    Auto.prototype.subirKilometraje = function () {
        this.kilometrajeActual = this.kilometrajeActual + 1;
    };
    Auto.prototype.cambiarrVelocidad = function (kilometraje) {
        this.kilometrajeActual = kilometraje;
    };
    return Auto;
}());
var colorActual = 'rojo';
var miAuto = new Auto(colorActual);
console.log(miAuto);
miAuto.prenderApagar();
miAuto.cambiarrVelocidad(3);
miAuto.cambiarColor('azul');
console.log(miAuto);
