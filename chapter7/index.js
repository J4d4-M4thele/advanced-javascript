"use strict";

//function
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

//class
// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// //object
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog.dogName, " is a ", dog.breed, " and weighs ", dog.weight,
//     "kg.");

// class Person {

//     //hash shows that it's private
//     #firstname;
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

// let p = new Person("Jada", "Mathele");
// console.log(p.firstname);
// // p.greet();
// let compliment = p.compliment(p.firstname, "hairstyle");
// // console.log(compliment);

//SUPER/ PARENT CLASS
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// //SUBCLASS
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);//inherit all the parent claas fields
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

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}

Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();