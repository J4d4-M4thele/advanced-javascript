"use strict";

//function
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

// Dog("Milo", 2.7, "black", "Pekingese");

//class
// class Dog {
//     //called when instantiating an object
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// //object
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog.dogName, " is a ", dog.breed, " and weighs ", dog.weight, "kg.");

// class Person {
//     constructor(firstname, lastname = "Doe") {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Maaike", "van Putten");

// console.log("Hi", p.firstname, p.lastname);

//7.1
// class Person {
//     //fields
//     firstname;
//     lastname;

//     //constructor
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     //methods
//     fullName(firstname, lastname) {
//         console.log(firstname + " " + lastname);
//     }
// }

// let friend1 = new Person("Meshay", "Solomons");
// let friend2 = new Person("Tyeishia", "Jacobs");

// console.log(`Hello ${friend1.firstname}!`);
// console.log(`Hello ${friend2.firstname}!`);

//7.2
// friend1.fullName(friend1.firstname, friend1.lastname);
// friend2.fullName(friend2.firstname, friend2.lastname);

/******************METHODS*********** */
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }

//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     }
// }

// let p = new Person("Maaike", "van Putten");
// p.greet();
// let p2 = new Person("Jada", "Mathele");
// p2.greet();
// let compliment = p2.compliment("Jada", "purse");
// alert(compliment);

/**************PROPERTIES********** */
// class Person {

//     //hash shows that it's private
//     #firstname; //private String firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }

//     get lastname() {
//         return this.#lastname;
//     }

//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }

//     greet() {
//         alert(`Hi there, I'm ${this.firstname} ${this.lastname}!`);
//     }

//     compliment(name, object) {
//         return "What lovely " + object + " you've got " + name;
//     }
// }

// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

// let p = new Person("Jada", "Mathele");
// console.log(p.firstname);
// p.greet();
// let compliment = p.compliment(p.firstname, "hairstyle");
// console.log(compliment);

/**************************INHERITANCE*********************** */
//SUPER/ PARENT CLASS
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed, "km/h");
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

//SUBCLASS
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);//inherit all the parent class fields
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
// motor.doWheelie();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
//     // introduce() {
//     //     console.log("Hi, I'm", this.firstname);
//     // }
// }

// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };

// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

//7.3
class Animal {
    constructor(animalName, sound) {
        this.animalName = animalName;
        this.sound = sound;
    }

    makeSound(animalName, sound) {
        alert("The " + animalName + " goes " + sound + "!");
    };
}

Animal.prototype.eat = function (animalName, food) {
    console.log(`The ${animalName} eats ${food}`);
}

let cow = new Animal("cow", "moo");
cow.makeSound(cow.animalName, cow.sound);
cow.eat(cow.animalName, "grass");
console.log(cow);