import * as fs from 'fs';
class Automovil {
    private marca: string
    private patente: string
    protected cantidadRuedas: number

    public constructor(marca: string, patente: string) {
        this.marca = marca;
        this.patente = patente;
        this.cantidadRuedas = 4;
    }

    public GetMarca(): string {
        return this.marca;
    }

    public GetPatente(): string {
        return this.patente;
    }

    publicGetCantRuedas(): number {
        return this.cantidadRuedas;
    }
}

class Moto extends Automovil {
    public constructor(marca: string, patente: string) {
        super(marca, patente);
        this.cantidadRuedas = 2;
    }
}

class Camion extends Automovil {
    public constructor(marca: string, patente: string) {
        super(marca, patente);
        this.cantidadRuedas = 16;
    }
}

class RegistroAutomotor {
    private listaAutos: Array<Automovil>

    public constructor() {
        this.listaAutos = new Array();
    }
    public GetAutos(): Array<Automovil> {
        return this.listaAutos;
    }
    public AgregarAutomovil(auto: Automovil) {
        this.listaAutos.push(auto);
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
                let auto: Automovil = new Automovil(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(auto);
                break;
            case "Moto":
                let moto: Moto = new Moto(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(moto);
                break;
            case "Camion":
                let camion: Camion = new Camion(vehiculo[1], vehiculo[2]);
                registro.AgregarAutomovil(camion);
                break;

            default:
                break;
        }
    }
    return registro;

}


let registro: RegistroAutomotor = new RegistroAutomotor();
registro = CargarRegistro();
console.log(registro);