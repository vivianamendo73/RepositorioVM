export abstract class Auto {
    protected marca:string;
    protected modelo:string;
    protected patente:string;
    protected velocidadActual:number;
    protected estaPrendido : boolean;

    constructor(marca:string, modelo:string, patente:string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;  
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar():void

    public prender(): void {
        this.estaPrendido = true;
    }
    public apagar(): void {
        this.estaPrendido = false;
    }
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