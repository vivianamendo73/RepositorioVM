import {Auto} from './Vehiculo'

export class AutoDeportivo extends Auto{
    public acelerar(){
        this.velocidadActual +=50;
    }
}