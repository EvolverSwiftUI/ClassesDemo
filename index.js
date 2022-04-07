class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let person = new Person("Sivaran", "Yadav");
console.log(person);
console.log(person.displayFullName());
console.log(Person.prototype);
console.log(Object.getPrototypeOf(person));

let person1 = new Person("Virat", "Kohli");
let person2 = new Person("Sachin", "Tendulkar");
console.log(person1);
console.log(person2);
console.log(typeof(Person));

// Inheritance in JS classes

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        return `${this.name} is eating`
    }
    makeSound(){
        return `${this.name} is shouting`

    }
}

let gorilla = new Animal("Gorilla");

console.log(gorilla.eat());
console.log(gorilla.makeSound());

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    sniffing() {
        return `${this.name} is sniffing`;
    }
}

let dog = new Dog("dog", "German Shephered");
console.log(dog);
console.log(dog.sniffing());
console.log(dog.eat());
console.log(dog.makeSound());

class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    knead() {
        return `${this.name} is kneading`;
    }
}

let cat = new Cat("cat", "Persian Cat");
console.log(cat);
console.log(cat.knead());
console.log(cat.eat());
console.log(cat.makeSound());