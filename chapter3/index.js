"use strict";

/***************ARRAYS************* */
// let arr1 = new Array("purple", "green", "yellow");
// let arr2 = ["black", "orange", "pink"];

// console.log(arr1);
// console.log(arr2);//better practice

// let arr3 = new Array(10);//this determines capacity
// let arr4 = [10];//adding element with value 10

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(`${arr[0]} is a ${typeof(arr[0])}`);
// console.log(`${arr[1]} is a ${typeof(arr[1])}`);
// console.log(`${arr[2]} is a ${typeof(arr[2])}`);

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);

// //throws error because a value has been assigned in line 21
// arr = ["nope, now you are overwriting the array"];

let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);//it doesn't exist so it's undefined
// console.log(cars[-1]);

// cars[0] = "Tesla";
// console.log(`Ovewritten index 0 is ${cars[0]}`);
// console.log(cars);

// cars[3] = "Kia";
// cars[-1] = "Fiat";
// console.log(cars[3]);//values are now allocated
// console.log(cars[-1]);
// console.log(cars);

// let colors = ["black", "orange", "pink"]
// let booleans = [true, false, false, true];
// let emptyArray = [];

// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// let lastElement = colors[colors.length -1]

// console.log(lastElement);

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers);
// console.log(`Elements in Numbers: ${numbers.length}`);

/**********************ARRAY METHODS************** */
//PUSH
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);
// console.log(favoriteFruits.length);

//SPLICE
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 1, "square", "trapezoid");
// console.log(arrOfShapes);
// arrOfShapes.unshift("oval");
// arrOfShapes.unshift("hexagon");
// console.log(arrOfShapes);

//CONCAT
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
// arr8.shift();
// console.log(arr8);
// arr8.splice(1, 3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

// let colors = ["black", "orange", "pink", "purple", "blue"];
// console.log(colors);
// //splice will pop
// colors.splice(4, 1);
// console.log(colors);
// //splice will shift
// colors.splice(0, 1);
// console.log(colors);

let arr8 = [2, 6, 7, 8];
// let findValue = arr8.find((e) =>  e === 6);//finds actual value not the value at a certain index
// let findValue2 = arr8.find((e) => e === 10);
// console.log(findValue, findValue2);

//finding using INDEXOF()
// let findValue3 = arr8.indexOf(6);
// let findValue4 = arr8.indexOf(10);//returns -1 coz it doesn't exist
// console.log(findValue3, findValue4);

//SORTING
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names);
// names.sort();//ascending order
// console.log(names);
// names.reverse();//descending order OR it just reverses original order
// console.log(names);

/*****************MULTIDIMENSIONAL ARRAYS******************* */
//TWO DIMENSIONAL ARRAYS
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log("arrOfArrays: ",arrOfArrays);
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log("arrOfArrays2: ",arrOfArrays2);

// console.log(arrOfArrays[1][2]); 
// //MULTIDIMENSIONAL
// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log("Multi-dimensional Array: ", arrOfArraysOfArrays);

/*
[
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
]
*/


/***************OBJECTS************* */
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// };
// console.log(dog);

// let dogColor = dog["color"];
// let dogColor2 = dog.color;

// console.log(dogColor);
// console.log(dogColor2);

// dog.color = "blue";
// dog.weight = 2.3;
// console.log(dog);

// dog.age = "three";
// let variable = "age";
// console.log(dog[variable]);//dog["age"]

// variable = "breed";
// console.log(dog[variable]);//dog["breed"]

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

/**********************ARRAYS AND OBJECTS*************** */
// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company);


// let company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company);

let company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health",
        "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};
// console.log(company);

let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];

console.log(addresses);

let streetName = company.address[0].street;//2nd Street
console.log(streetName);