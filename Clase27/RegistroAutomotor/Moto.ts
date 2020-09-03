import {Automovil} from './AutomovilAbstract'

export class Moto extends Automovil{
    private cilindrada :number;

    public constructor (marca: string, modelo:string,  patente: string, litrosNaftaTanque:number, cilindrada:number){
        super(marca,modelo,patente,litrosNaftaTanque);
        this.cilindrada = cilindrada;
    }
    public acelerar(){
        this.velocidadActual +=50;
    }
    public cargarNafta(){
        this.litrosNaftaTanque +=5;
    }

    public getCilindrada():number{
        return this.cilindrada;
    }
}