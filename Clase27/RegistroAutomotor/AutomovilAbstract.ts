export abstract class Automovil {
    private marca: string;
    private modelo:string;
    private patente: string;
    protected cantidadRuedas: number;
    protected velocidadActual:number;
    protected litrosNaftaTanque:number;

    constructor(marca:string, modelo:string, patente:string, litrosNaftaTanque:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;  
        this.velocidadActual = 0;
        this.cantidadRuedas = 4;
        this.litrosNaftaTanque = litrosNaftaTanque;
    }

    abstract acelerar():void
    abstract cargarNafta():void

    public getMarca():string{
        return this.marca;
    }
    public getModelo():string{
        return this.modelo;
    }
    public getPatente():string{
        return this.patente;
    }
}