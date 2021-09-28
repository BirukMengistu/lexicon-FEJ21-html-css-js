//import class 
 import {fleet} from '../src/fleet-data.js'
 import { Car } from './class/car.js';
 import { Drone }  from './class/drone.js';
import { FleetDataServices } from './services/fleet-data-services.js';


let dataServices = new FleetDataServices();

dataServices.loadData(fleet);

console.log(dataServices.cars);





