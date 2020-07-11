class Auto {
    private estaEncendido: boolean
    private velocidadActual: number
    private cambioActual: number
    private colorActual: string
    private kilometrajeActual: number


    constructor(colorActual :string) {
        this.velocidadActual = 0;
        this.kilometrajeActual = 0;
        this.estaEncendido = false;
        this.cambioActual = 0;
        this.colorActual = colorActual;

    }

    prenderApagar(): void {
        if (this.estaEncendido)
            this.estaEncendido = false
        else
            this.estaEncendido = true
    }
    subirCambio(): void {
        this.cambioActual = this.cambioActual + 1
    }
    bajarCambio(): void {
        this.cambioActual = this.cambioActual - 1
    }
    subirVelocidad(): void {
        this.velocidadActual = this.velocidadActual + 1
    }
    bajarVelocidad(): void {
        this.velocidadActual = this.velocidadActual - 1
    }
    elegirVelocidad(velocidad: number): void {
        this.velocidadActual = velocidad;
    }

    cambiarColor(color: string): void {
        this.colorActual = color;
    }

    subirKilometraje(): void {
        this.kilometrajeActual = this.kilometrajeActual + 1
    }
    cambiarrVelocidad(kilometraje: number): void {
        this.kilometrajeActual = kilometraje;
    }
}

let colorActual: string = 'rojo';
let miAuto = new Auto(colorActual);

console.log(miAuto);

miAuto.prenderApagar();
miAuto.cambiarrVelocidad(3);
miAuto.cambiarColor('azul');

console.log(miAuto);