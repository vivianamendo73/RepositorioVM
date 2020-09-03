import {AutoCiudad} from './AutoCiudad'
import {AutoDeportivo} from './AutoDeportivo'
import {Camioneta} from './Camioneta'

let auto1:AutoCiudad = new AutoCiudad('Ford','Focus','AD760ZB');
auto1.acelerar();
console.log(auto1);
let auto2:AutoDeportivo = new AutoDeportivo('Toyota','Corolla','AD888ZB');
auto2.acelerar();
console.log(auto2);
let camioneta:Camioneta = new Camioneta('Ford','Ranger','AA222RF');
camioneta.acelerar();
console.log(camioneta);