 //extending class
 import {Vehicle} from './vehicle.js';
 export class Drone extends Vehicle {
    constructor(model, type){

        super()
        this._model = model;
        this._type= type;
       }
    static getCompanyName(){
        console.log('MY COMPANY')
    }
    start(){
        console.log('Constract Vehicle');
      }
}