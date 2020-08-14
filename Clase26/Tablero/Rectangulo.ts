export class Rectangulo{
    private base:number;
    private altura:number;
    protected color:string;

    public constructor(base:number,altura:number){
        this.base = base;
        this.altura = altura;
        this.color = 'blanco'
    }

    public area():number{
        return this.base * this.altura;
    }

    public getBase():number{
        return this.base;
    }

    public getAltura():number{
        return this.altura;
    }

    public getColor():string{
        return this.color;
    }
}