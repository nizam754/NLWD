"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); // German Shepherd says Gheu Gheu
    }
}
const dog = new Animal("German Sheperd", "dog", "Gheu Gheu");
const cat = new Animal("Persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();
