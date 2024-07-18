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
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

for(let name of names) {
    console.log(name);
}
