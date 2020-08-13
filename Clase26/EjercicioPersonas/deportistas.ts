import {Persona} from './persona'

class PersonaSedentaria extends Persona{
    public constructor(nombre:string, edad:number, presionMax:number, presionMin:number, frecuenciaCardiaca:number){
        super(nombre,edad,presionMax,presionMin,frecuenciaCardiaca);
    }
    public correr():void{
        this.frecuenciaCardiaca +=30;
    }
}
class PersonaDeportista extends Persona{
    public constructor(nombre:string, edad:number, presionMax:number, presionMin:number, frecuenciaCardiaca:number){
        super(nombre,edad,presionMax,presionMin,frecuenciaCardiaca);
    }
    public correr():void{
        this.frecuenciaCardiaca +=5;
    }
}

let sedentario :PersonaSedentaria = new PersonaSedentaria("Viviana", 47,8,5,95);
let deportista :PersonaDeportista = new PersonaDeportista("Cecilia",48,10,7,95);

sedentario.correr();
deportista.correr();

console.log(sedentario);
console.log(deportista);