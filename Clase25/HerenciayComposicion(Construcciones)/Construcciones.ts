import * as fs from 'fs';
var ReadlineSync = require("readline-sync");

class Construccion {
    private direccion:string
    private datosCatastrales:string
    private telefonoResponsable:number
    protected numeroPisos:number

    public constructor(numeroPisos:number,direccion:string,datosCatasttrales:string,telefonoResponsable:number){
        this.direccion = direccion;
        this.datosCatastrales = datosCatasttrales;
        this.telefonoResponsable = telefonoResponsable;
        this.numeroPisos = numeroPisos;
    }
    public SetDireccion(direccion:string):void{
        this.direccion = direccion;
    }
    public GetDireccion():string{
        return this.direccion;
    }
    public SetDatosCatastrales(datosCatastrales:string):void{
        this.datosCatastrales = datosCatastrales;
    }
    public GetDatosCatastrales():string{
        return this.datosCatastrales;
    }
    public SetTelefonoResponsable(telefonoResponsable:number):void{
        this.telefonoResponsable = telefonoResponsable;
    }
    public GetNumeroPisos():number{
        return this.numeroPisos;
    }

}

class Casa extends Construccion {
    private nombreDueño:string
    public constructor(numeroPisos:number,nombreDueño: string,direccion:string,datosCatasttrales:string,telefonoResponsable:number) {
        super(numeroPisos,direccion,datosCatasttrales,telefonoResponsable);
        this.nombreDueño= nombreDueño;
    }
    public SetNombreDueño(nombreDueño:string):void{
        this.nombreDueño = nombreDueño;
    }
    
    public GetNombreDueño():string{
        return this.nombreDueño;
    }

    public ConstruirPlanta():void{
        this.numeroPisos +=1;
    }
}


class Edificio extends Construccion {
    private nombreConsorcio:string
    private cantidadDepartamentos:number
    public constructor(numeroPisos:number,nombreConsorcio: string, cantidadDepartamentos: number,direccion:string,datosCatasttrales:string,telefonoResponsable:number) {
        super(numeroPisos,direccion,datosCatasttrales,telefonoResponsable);
        this.nombreConsorcio = nombreConsorcio;
        this.cantidadDepartamentos = cantidadDepartamentos;
    }
    public SetNombreConsorcio(nombreConsorcio:string):void{
        this.nombreConsorcio = nombreConsorcio;
    }
    public GetNombreConsorcio():string{
        return this.nombreConsorcio;
    }
    
    public SetCantidadDepartamentos(cantidadDepartamentos:number):void{
        this.cantidadDepartamentos = cantidadDepartamentos;
    }
        
    public GetCantidadDepartamentos():number{
        return this.cantidadDepartamentos;
    }
    
    public ConstruirPiso():void{
        this.numeroPisos +=1;
    }
}

class Construcciones {
    private listaConstrucciones: Array<Construccion>
    private nombre:string
    private cuil:number

    public constructor(nombre:string,cuil:number) {
        this.listaConstrucciones = new Array();
        this.nombre= nombre;
        this.cuil = cuil;
    }

    public GetConstrucciones():Array<Construccion>{
        return this.listaConstrucciones;
    }
    public AgregarCostruccion(construccion:Construccion):void{
        this.listaConstrucciones.push(construccion);
    }
    public GetNombre():string{
        return this.nombre;
    }
    public SetNombre(nombre:string):void{
        this.nombre = nombre;
    }
    public GetCuil():number{
        return this.cuil;
    }
    public SetCuil(cuil:number):void{
        this.cuil = cuil;
    }

}

function CargarCostrucciones(nombre:string,cuil:number): Construcciones {

    let listado: Construcciones =  new Construcciones(nombre,cuil);

    let textoDeArchivo: string = fs.readFileSync('Construcciones.txt', 'utf8');
    let construccion: string[] = textoDeArchivo.split('\r\n');
    for (let index: number = 0; index < construccion.length; index++) {
        let textoIntermedio: string = construccion[index];
        let edificacion: string[] = textoIntermedio.split(',');
        switch (edificacion[0]) {
            case "Casa":
                let casa: Casa = new Casa(Number(edificacion[1]), edificacion[2],edificacion[3],edificacion[4], Number(edificacion[5]));
                listado.AgregarCostruccion(casa);
                break;
            case "Edificio":
                let edificio: Edificio = new Edificio(Number(edificacion[1]), edificacion[2],Number(edificacion[3]),edificacion[4],edificacion[5],Number(edificacion[6]));
                listado.AgregarCostruccion(edificio);
                break;
            default:
                break;
        }
    }
    return listado;

}

let nombre : string = ReadlineSync.question("Ingrese El nombre de la empresa  =   ");
let cuil :number = ReadlineSync.questionInt("Ingrese El cui de la empresa  =   ");
let empresaConstructora: Construcciones = new Construcciones(nombre,cuil);
empresaConstructora = CargarCostrucciones(nombre,cuil);
console.log(empresaConstructora); 