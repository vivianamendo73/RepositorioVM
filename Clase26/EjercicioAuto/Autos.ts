import {Auto} from './Auto'

class AutoCarrera extends Auto{
    public constructor(marca:string, modelo:string){
        super(marca,modelo);
    }
    public acelerar():void{
        this.litrosNaftaTanque -=5;
    }
}


let auto: Auto = new Auto('Ford', 'Fiesta',);
let autoCarrera: AutoCarrera = new AutoCarrera('Ford', 'Mustang');
auto.acelerar();
autoCarrera.acelerar();
console.log(auto);
console.log(autoCarrera);