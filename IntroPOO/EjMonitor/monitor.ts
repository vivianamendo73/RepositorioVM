class Monitor {
    private pulgadas: number
    private estaPrendido: boolean
    private brilloActual: number


    constructor(brilloActual: number, pulgadas: number) {
        this.brilloActual = brilloActual;
        this.pulgadas = pulgadas;
        this.estaPrendido = false;
    }

    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirBrillo(): void {
        this.brilloActual = this.brilloActual + 1
    }
    bajarBrillo(): void {
        this.brilloActual = this.brilloActual - 1
    }
    
    establecerPulgadas(pulgadas: number): void {
        this.pulgadas = pulgadas;
    }
}


let brilloActual: number = 10;
let pulgadas: number = 24;
let miMonitor = new Monitor(brilloActual, pulgadas);

console.log(miMonitor);

miMonitor.prenderApagar();
miMonitor.subirBrillo();

console.log(miMonitor);