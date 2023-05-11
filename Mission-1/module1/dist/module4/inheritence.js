"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr. X', 15, 'Uganda');
student1.
;
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numofClass) {
        return `This ${this.name} will take ${numofClass} class`;
    }
}
const teacher1 = new Teacher('Mr. Y', 54, 'USA', 'Professor');
teacher1.;
