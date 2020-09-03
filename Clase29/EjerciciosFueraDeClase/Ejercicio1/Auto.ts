import {Automovil} from './AutomovilAbstract'

export class Auto extends Automovil{

    public constructor (marca: string, modelo:string, patente: string,litrosNaftaTanque:number){
        super(marca,modelo,patente,litrosNaftaTanque);
        this.cantidadRuedas = 4;
    }
    public acelerar(){
        this.velocidadActual +=50;
    }
    public cargarNafta(){
        this.litrosNaftaTanque +=5;
    }
}