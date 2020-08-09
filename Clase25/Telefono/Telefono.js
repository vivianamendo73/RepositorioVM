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
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        if (numero > 0) {
            console.log("Mensaje Enviado" + msg + " al numero " + numero + " correctamente");
            return true;
        }
        return false;
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("Llamada en curso");
    };
    Telefono.prototype.SetBateria = function (bateria) {
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
var Camara = /** @class */ (function () {
    function Camara() {
        this.estaPrendida = false;
        this.numeroFotos = 0;
    }
    Camara.prototype.SacarFoto = function () {
        this.numeroFotos += 1;
        return "Foto sacada";
    };
    Camara.prototype.prenderApagar = function () {
        if (this.estaPrendida)
            this.estaPrendida = false;
        else
            this.estaPrendida = true;
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara();
        ;
        return _this;
    }
    TelefonoConCamara.prototype.GetCamara = function () {
        return this.camara;
    };
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log(this.camara.SacarFoto());
    };
    return TelefonoConCamara;
}(Telefono));
var telCamara = new TelefonoConCamara();
telCamara.sacarFoto();
