class Animal {
    constructor(public name: string, public species: string, public sound: string) {

    }
    public makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); // German Shepherd says Gheu Gheu
    }
}

const dog = new Animal("German Sheperd", "dog", "Gheu Gheu")
const cat = new Animal("Persian", "cat", "meaw meaw")
dog.makeSound();
cat.makeSound();