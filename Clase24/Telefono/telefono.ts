class Telefono{
    private estaPrendido : boolean
    private bateriaActual : number

    public constructor(){
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    public mandarMensaje():void {
        console.log("Mensaje Enviado");
    }
    public hacerLlamada():void{
        console.log("Llamada en curso");
    }

    public SetBateria(bateria:number):void{
        this.bateriaActual = bateria;
    }

    public GetCarga():number{
        return this.bateriaActual;
    }

    public prenderApagar():void {
        if (this.estaPrendido)
         this.estaPrendido = false;
        else
        this.estaPrendido = true;

    }
}

class TelefonoConCamara extends Telefono{
    private numeroFotos : number;

    public constructor(){
        super();
        this.numeroFotos = 0;
    }

    public GetFotos():number{
        return this.numeroFotos;
    }
    
    public sacarFoto():void{
        this.numeroFotos += 1;
        console.log("Nueva Foto Sacada");

    }
}

class TelefonoConRadio extends Telefono{
    private frecuenciaAtual:number

    public constructor(){
        super();
        this.frecuenciaAtual = 95.5;
    }

    public SetFrecuencia(frecuenciaAtual:number):void{
        this.frecuenciaAtual = frecuenciaAtual;
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaAtual;
    }
}

let telCamara = new TelefonoConCamara();
telCamara.sacarFoto();