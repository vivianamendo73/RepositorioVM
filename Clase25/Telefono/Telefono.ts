class Telefono{
    private estaPrendido : boolean
    private bateriaActual : number
    protected linternaPrendida : boolean

    public constructor(){
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    public mandarMensaje(msg:string,numero:number):boolean {
        if (numero > 0) {
            console.log("Mensaje Enviado" +msg+ " al numero " +numero+ " correctamente");
            return true;
        }
        return false;
        
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

class Camara {
    private estaPrendida : boolean
    private numeroFotos : number

    public constructor(){
        this.estaPrendida = false;
        this.numeroFotos = 0;
    }

    public SacarFoto():string{
        this.numeroFotos +=1;
        return "Foto sacada";
    }

    public prenderApagar():void {
        if (this.estaPrendida)
         this.estaPrendida = false;
        else
        this.estaPrendida = true;

    }
}

class TelefonoConCamara extends Telefono{
    private camara : Camara

    public constructor(){
        super();
        this.camara = new Camara();;
    }

    public GetCamara():Camara{
        return this.camara;
    }
    
    public sacarFoto():void{
        console.log(this.camara.SacarFoto());

    }
}


let telCamara = new TelefonoConCamara();
telCamara.sacarFoto();