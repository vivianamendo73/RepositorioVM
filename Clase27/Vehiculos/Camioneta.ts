import {Auto} from './Vehiculo'

export class Camioneta extends Auto{
    private turboEncendido:boolean;
    public constructor(marca:string, modelo:string, patente:string){
        super(marca, modelo, patente);
        this.turboEncendido = false;
    }
    public acelerar(){
        this.velocidadActual +=30;
        this.turboEncendido = true;
    }
}