export class Item{
    private nombreItem:string;
    private costo:number;


    public constructor(nombreItem:string, costo:number){
        this.nombreItem = nombreItem;
        this.costo = costo;
  
    }
    public getNombre():string{
        return this.nombreItem;
    }
    public setNombre(nombreItem:string):void{
        this.nombreItem = nombreItem;
    }
    public getCosto():number{
        return this.costo;
    }
    public setCosto(costo:number):void{
        this.costo = costo;
    }

}