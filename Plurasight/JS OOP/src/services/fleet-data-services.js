import {Car} from '../class/car.js'
import {Drone} from '../class/drone.js'
import {fleet} from '../fleet-data.js'
export class FleetDataServices{
    constructor(){
        this.cars =[];
        this.drones=[];
    }

    loadData(dataObj){
        for(let data of dataObj){
         switch(data.type){
             case 'car':
                 this.cars.push(data);
                 break;
              case 'drone' :
                  this.drones.push(data);
                  break;
               default:
                     
         }

        }
    }
}

