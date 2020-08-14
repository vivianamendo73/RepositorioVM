import {Rectangulo} from './Rectangulo';

export class Cuadrado extends Rectangulo{
    private ocupado:boolean;
    public constructor(lado:number){
        super(lado,lado);
        this.ocupado = false;
    }

    //Polimorfismo:redefine el metodo area
    public area():number{
        return Math.pow(this.getBase(),2);
    }

    //Metodo que modifica la variable protected color
    public setColor(color:string):void{
        this.color = color;
    }

    public jugadaSobreCasillero():void{
        if (this.ocupado){
            this.ocupado = false;
        }else{
            this.ocupado = true;
        }
      
    }
        
            
}