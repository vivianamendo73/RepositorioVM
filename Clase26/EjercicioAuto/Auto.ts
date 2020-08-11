export class Auto{
    private marca: string
    private modelo: string
    private velocidad:number
    protected litrosNaftaTanque:number

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
        this.litrosNaftaTanque = 45;
    }

   
    public acelerar():void{
        this.litrosNaftaTanque -=1;
    }
    public GetListrosNafta():number{
        return this.litrosNaftaTanque;
    }
    public GetVelocidad():number{
        return this.velocidad;
    }
    public GetModelo():string{
        return this.modelo;
    }
    public GetMarca():string{
        return this.marca;
    }
}


