export class Persona{
    private nombre:string;
    private edad:number;
    private presionMax:number;
    private presionMin:number;
    protected frecuenciaCardiaca:number;

    public constructor(nombre:string, edad:number, presionMax:number, presionMin:number, frecuenciaCardiaca:number){
        this.nombre = nombre;
        this.edad = edad;
        this.presionMax = presionMax;
        this.presionMin = presionMin;
        this.frecuenciaCardiaca = frecuenciaCardiaca;
    }
    public cumplirAños():void{
        this.edad += 1;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getEdad():number{
        return this.edad;
    }
    public getPresionMax():number{
        return this.presionMax;
    }
    public getPresionMin():number{
        return this.presionMin;
    }
    public getFrecuenciaCardiaca():number{
        return this.frecuenciaCardiaca;
    }
    public correr():void{
        this.frecuenciaCardiaca +=10;
    }
}