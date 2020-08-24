import { Item } from './Item';
import * as fs from 'fs';
var ReadlineSync = require("readline-sync");

class ControlStock {
    private listaItemsStock: Array<Item>;
    private listaItemsVendidos: Array<Item>;

    public constructor() {
        this.listaItemsStock = [];
        this.listaItemsVendidos = [];
        this.cargarLista();
    }

    private cargarLista() {
        let textoDeArchivo: string = fs.readFileSync('ItemsStock.txt', 'utf8');
        let items: string[] = textoDeArchivo.split('\r\n');
        for (let index: number = 0; index < items.length; index++) {
            let itemText: string = items[index];
            let item: string[] = itemText.split(' ');
            let producto: Item = new Item(item[0], Number(item[1]));
            this.listaItemsStock.push(producto);
        }
    }

    private encontrarItem(nombre:string):number{
        let item :Item;
        for (let index = 0; index < this.listaItemsStock.length; index++) {
            item = this.listaItemsStock[index];
            if (item.getNombre() == nombre){
                return index;
            }
        }
        return -1;
    }

    public vender(producto:string):void{
        let indice :number = this.encontrarItem(producto);
        console.log(this.listaItemsStock);
        console.log(this.listaItemsVendidos);
        if (indice != -1){
            let item:Item = this.listaItemsStock[indice];
            this.listaItemsStock.splice(indice,1);
            this.listaItemsVendidos.push(item);
            console.log(this.listaItemsStock);
            console.log(this.listaItemsVendidos);
        }
            
    }

    public comprar(nombre:string,costo:number):void{
        let item :Item = new Item(nombre,costo);
        this.listaItemsStock.push(item);
    }
    public imprimir():void{

            let texto : string = '';
            for (let index = 0; index < this.listaItemsVendidos.length; index++) {
               let item : Item = this.listaItemsVendidos[index]  ;
               let cadena: string[] = new Array();
               cadena = Object.values(item);
               texto = texto + cadena.toString() + '\r\n';
            }
           fs.writeFile('itemVendidos.txt',texto,function(err){
               // If an error occurred, show it and return
               if(err) return console.error(err);
               // Successfully wrote to the file!
           }); 
    }
}

let kiosko: ControlStock = new ControlStock();
let sigo: boolean = true;
while (sigo) {
    let accion = ReadlineSync.questionInt("Ingrese 1 si desea comprar un producto, 2 si desea vender y 0 si desea salir   =   ");
    let nombreProducto:string;
    let costo:number;
    switch (accion) {
        case 1:
            nombreProducto  = ReadlineSync.question("Ingrese El nombre del producto que desea comprar   =   ");
            costo = ReadlineSync.questionInt("Ingrese El costo del producto que desea comprar   =   ");
            kiosko.comprar(nombreProducto,costo);
            break;
        case 2:
            nombreProducto = ReadlineSync.question("Ingrese El nombre del producto que desea vender   =   ");
            kiosko.vender(nombreProducto);
            break;
        case 0:
            sigo = false;
           kiosko.imprimir();               
            break;
        default:
            break;
    }
}
