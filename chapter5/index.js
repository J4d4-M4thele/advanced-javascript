/**********************WHILE LOOP*************** */
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// console.log(someArray);
// let notFound = true;
// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//         console.log(someArray);
//     }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray);

/****************DO WHILE LOOP**************** */
// let number;

// do {
// number = prompt("Please enter a number between 0 and 100: ");
// alert(`You chose the number: ${number}`)
// } while (!(number >= 0 && number < 100));

/********************FOR LOOP****************** */
// for (let i = 0; i < 10; i++) {
//     console.log(`i's value is now ${i}`);
// }
// console.log("We have broken out of the for loop");

/*******************NESTED LOOPS*************** */
// let arrOfArrays = [];

// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);//[[], [], []]
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);//[[0,1,2,3,4,5,6], [0,1,2,3,4,5,6], [0,1,2,3,4,5,6]]
//     }
// }
// console.table(arrOfArrays);

/*******************FOR OF LOOPS*************** */
//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

//5.6
// let arr = [];
// for (let i = 1; i < 16; i++) {
//     arr.push(i);
// }
// console.log(arr);

// console.log("");
// console.log("*****USING FOR*****");
// //using a for loop
// for (let j = 0; j < 15; j++) {
//     console.log(arr[j]);
// }

// console.log("");
// console.log("*****USING FOR OF*****");
// //using a for of loop
// for(let e of arr) {
//     console.log(`The element in index ${arr.indexOf(e)}: ${e}`);
// }


/*******************FOR IN LOOPS*************** */
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };

// for(let prop in car) {
//     console.log(`${prop}: ${car[prop]}`);
// }

// let carKeys = Object.keys(car);
// console.log(carKeys);

// for(let key of carKeys) {
//     console.log(key);
// }

// for (let i = 0; i < carKeys.length; i++) {
//     console.log(`${carKeys[i]}: ${car[carKeys[i]]}`);
// }

/*******************BREAK*************** */
let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if(i === 4) {
//         break;
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//         if (cars[i].color === "black") {
//             console.log("I have found my new car:", cars[i]);
//             break;
//         }
//     }
// }

/*******************CONTINUE*************** */
// for (let i = 1; i < 50; i = i + 2) {
//     console.log(i);
// }

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];

for (let i = 0; i < groups.length; i++) {
    let matches = 0;
    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("M")) {
            matches++;
        } else {
            continue;
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an M:");
            console.log(groups[i]);
            break;
        }
    }
}

outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith("M")) {
            console.log("found one starting with M:", member);
            continue outer;
        }
    }
}