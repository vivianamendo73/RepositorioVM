
import {Cuadrado} from './Cuadrado';


class Tablero{
    private nombreJuego:string;
    private numeroDeFichas:number;
    private numeroDeParticipantes:number;
    private casilleros:Array<Array<Cuadrado>>;

    public constructor(nombreJuego:string, numeroDeFichas:number, numeroDeParticipantes){
        this.nombreJuego = nombreJuego;
        this.numeroDeFichas = numeroDeFichas;
        this.numeroDeParticipantes = numeroDeParticipantes;
        this.casilleros = new Array<Array<Cuadrado>>;
    }

    //Metodo privado que carga la variable casilleros asignandole un color de frma tal que queden intercalados 
    private cargarTablero(tamañoTablero:number,tamañoCasillero:number):void{
        for (let i = 0; i < tamañoTablero ; i++) {
            let fila: Array<Cuadrado> = new Array(tamañoTablero);
            for (let j = 0; j < tamañoTablero ; j++) {
                const casillero:Cuadrado = new Cuadrado(tamañoCasillero);
                let parImpar:number = i + j;
                parImpar = parImpar % 2;
                if ( parImpar == 0){
                    casillero.setColor('blanco');
                }else{
                    casillero.setColor('negro');
                }
                fila.push(casillero);
                
            }    
            this.casilleros.push(fila);       
        }
    }

    //Metodo publico que llama al metodo preivado solicitado en la consigna
    public armarTablero(tamañoTablero:number,tamañocCasillero:number):void{
        this.cargarTablero(tamañoTablero,tamañocCasillero);
        console.log("TableroTerminado");
    }
    public getNumFichas():number{
        return this.numeroDeFichas;
    }
    public getNumParticipantes():number{
        return this.numeroDeParticipantes;
    }
    public getCasilleros():Array<Array<Cuadrado>>{
        return this.casilleros;
    }

}
//El Usuario ingresara por teclado las caracteristicas del juego.
let nombreJuego:string = "Ajedrez"
let cantidaFichas:number = 20;
let cantidadDeJugadores:number = 4;
//creo una instancia de Tablero
let tablero:Tablero = new Tablero(nombreJuego,cantidaFichas,cantidadDeJugadores);

let tamañoTablero:number = 4;
let tamañoCasillero:number = 2;
tablero.armarTablero(tamañoTablero,tamañoCasillero);
console.log(tablero);