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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("Mensaje Enviado");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("Llamada en curso");
    };
    Telefono.prototype.SetBateria = function (bateria) {
        if (bateria < 0) {
            throw new Error('El nivel de bateria no puede ser menor que 0');
        }
        this.bateriaActual = bateria;
    };
    Telefono.prototype.GetCarga = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.numeroFotos = 0;
        return _this;
    }
    TelefonoConCamara.prototype.GetFotos = function () {
        return this.numeroFotos;
    };
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.numeroFotos += 1;
        console.log("Nueva Foto Sacada");
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaAtual = 95.5;
        return _this;
    }
    TelefonoConRadio.prototype.SetFrecuencia = function (frecuenciaAtual) {
        this.frecuenciaAtual = frecuenciaAtual;
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaAtual;
    };
    return TelefonoConRadio;
}(Telefono));
var telefono = new Telefono();
var telCamara = new TelefonoConCamara();
telCamara.sacarFoto();
var resultado;
try {
    resultado = telefono.SetBateria(-1);
}
catch (error) {
    console.log('Ocurrió un error esperado, seteando resultado menor que 0' + error + ".");
    resultado = 0;
}
