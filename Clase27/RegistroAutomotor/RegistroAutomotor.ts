import {Automovil} from './AutomovilAbstract'
import {Moto} from './Moto'
import {Camion} from './Camion'
import {Auto} from './Auto'
import * as fs from 'fs';
var ReadlineSync = require("readline-sync");

class RegistroAutomotor{
    private listaAutomotores : Array<Automovil>
    public constructor(){
        this.listaAutomotores =[];
    }
     public getAutos():Array<Automovil>{
         return this.listaAutomotores;
     }

     public agregarAutomovil(auto:Automovil){
         this.listaAutomotores.push(auto);
     }

     public ImprimirArchivo():void{
         let texto : string = '';
         for (let index = 0; index < this.listaAutomotores.length; index++) {
            let vehiculo : Automovil = this.listaAutomotores[index]  ;
            let cadena: string[] = new Array();
            cadena = Object.values(vehiculo);
            texto = texto + cadena.toString() + '\r\n';
         }
        fs.writeFile('VehiculosSalida.txt',texto,function(err){
            // If an error occurred, show it and return
            if(err) return console.error(err);
            // Successfully wrote to the file!
        }); 
     }

}

function CargarRegistro(): RegistroAutomotor {

    let registro: RegistroAutomotor =  new RegistroAutomotor();

    let textoDeArchivo: string = fs.readFileSync('Vehiculos.txt', 'utf8');
    let vehiculos: string[] = textoDeArchivo.split('\r\n');
    for (let index: number = 0; index < vehiculos.length; index++) {
        let textoIntermedio: string = vehiculos[index];
        let vehiculo: string[] = textoIntermedio.split(' ');
        switch (vehiculo[0]) {
            case "Auto":
                let auto: Auto = new Auto(vehiculo[1], vehiculo[2], vehiculo[3], Number(vehiculo[4]));
                registro.agregarAutomovil(auto);
                break;
            case "Moto":
                let moto: Moto = new Moto(vehiculo[1], vehiculo[2],vehiculo[3],  Number(vehiculo[4]),  Number(vehiculo[5]));
                registro.agregarAutomovil(moto);
                break;
            case "Camion":
                let camion: Camion = new Camion(vehiculo[1], vehiculo[2],vehiculo[3],  Number(vehiculo[4]));
                registro.agregarAutomovil(camion);
                break;

            default:
                break;
        }
    }
    return registro;

}

//crea base de datos
let registro: RegistroAutomotor = new RegistroAutomotor();
//carga base de datos con datos iniciales
registro = CargarRegistro();
let auto : Auto = new Auto('Renault','Megane','OLZ245',55);
//modificabase de datos agregando un auto
registro.agregarAutomovil(auto);
registro.ImprimirArchivo();

