import {Automovil} from './AutomovilAbstract'

export class Camion extends Automovil{
    private tieneAcoplado :boolean;

    public constructor (marca: string, modelo:string,  patente: string, litrosNaftaTanque:number){
        super(marca,modelo,patente,litrosNaftaTanque);
        this.tieneAcoplado=false;
    }
    public acelerar(){
        this.velocidadActual +=10;
    }
    public cargarNafta(){
        this.litrosNaftaTanque +=65;
    }

    public agregarAcoplado():void{
       this.tieneAcoplado = true;
    }
}