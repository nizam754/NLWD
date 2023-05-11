"use strict";
//interface
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log(" I am syopping engine");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log(" I am starting engine... ");
    }
    stopEngine() {
        console.log(" I am stopping engine... ");
    }
}
const car1 = new Vehicle('Car', 'Honda', 2015);
car1.
;
