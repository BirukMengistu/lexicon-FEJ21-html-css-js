
 import { Vehicle } from './vehicle.js';
// extended class from Vehicle
export  class Car extends Vehicle {
    start(){
        console.log('Constract car');
    }
    constructor(model, type){
        super()
        this._model = model;
        this._type = type;
    }
}
