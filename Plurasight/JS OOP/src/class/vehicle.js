//root class


export class Vehicle {
    start(){
         console.log('Constract Vehicle');
     }
     static getCompanyName(){
        console.log('MY COMPANY')
    }
 constructor(id, name){
        this._id = id;
        this._name= name; 
        
 }
 }

 