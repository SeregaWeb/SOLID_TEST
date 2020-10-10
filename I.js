class Animal {
    constructor (name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(this.name + ' Умеет плавать');
    }
} 

const flyer  = {
    fly() {
        console.log(this.name + ' Умеет летать');
    }
}
const walker = {
    walk() {
        console.log(this.name + ' Умеет ходить');
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog   = new Dog('Rex');
const eagle = new Eagle('Eagle');
const whale = new Whale('Whale');

dog.swim();
dog.walk();

eagle.fly();
eagle.walk();

whale.swim();