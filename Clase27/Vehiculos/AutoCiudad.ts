import {Auto} from './Vehiculo'

export class AutoCiudad extends Auto{
    public acelerar(){
        this.velocidadActual +=10;
    }
}