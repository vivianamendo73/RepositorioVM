import {Telefono} from './Telefono'

class SmartPhone implements Telefono{
    private estaPrendido:boolean;

    public constructor(){
        this.estaPrendido = false;
    }

    public prender():void{
        this.estaPrendido = true;
    }

    public apagar():void{
        this.estaPrendido = false;
    }

    public llamar(numero:string):void{
        console.log("Llamando a" +numero+ " ahora.");
    }

    public sacarFoto():void{
        console.log("Sacando una foto");
    }
}