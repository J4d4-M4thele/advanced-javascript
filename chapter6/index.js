// function sayHello() {
//     let you = prompt("What's your name? ");
//     alert("Hello " + you + "!");
// }
// sayHello();

/*******************PARAMETERS*************** */
// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// let arg1 = "argument 1";
// let arg2 = "argument 2";

// console.log(tester(arg1, arg2));

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// addTwoNumbers(222, 444);//666
// addTwoNumbers(3, 4);//7
// addTwoNumbers(12,-90);//-78
//12 + (-90);
//12 - 90;

/*******************DEFAULT PARAMETERS*************** */
// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();//2 + 3
// addTwoNumbers(4,5);//4 + 5
// addTwoNumbers(10);//10 + 3

/*******************ARROW FUNCTIONS*************** */
// function doStuff(x) {
//     console.log(x);
// }
// doStuff("Hello world!");

// let doArrowStuff = x => console.log(x);
// doArrowStuff("Great, it works!");

// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(333, 555);

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

/*******************SPREAD OPERATOR*************** */
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
// "powerful"];
// console.log(message);

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr1 = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr1, ...arr2);//5 + 9 + 6 + 7

/*******************REST OPERATOR*************** */
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

/*******************RETURNING FUNCTION VALUES*************** */
// function addTwoNumbers(x, y) {
//     return x + y;
// }
// let result = addTwoNumbers(4, 5);
// console.log(result);

// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
// let result = addTwoNumbers(i, 2*i);
// resultsArr.push(result);
// }
// console.log(resultsArr);

/*******************RETURNING WITH ARROW FUNCTIONS*************** */
// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
// }
// console.log(addTwoNumbers(4, 5));

/*******************VARIABLE SCOPES*************** */
// function testAvailability(x) {
//     console.log("Available here:", x);
// }
// testAvailability("Hi!");
//x called out of scope
//console.log("Not available here:", x);//logs error

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);//out of scope

/*******************LET VS VAR*************** */
// function doingStuff() {
//     if (true) {
//         //var x = "local";
//         // let x = "local";
//         const x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

/*******************GLOBAL VARIABLES*************** */
// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
// console.log("Access to global vars inside function." , globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";
// function doingStuff() {
// let x = "local";
// console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(x) {
// console.log(x);
// }
// doingStuff("param");

/*******************IIFEs*************** */
// (function () {
//     console.log("IIFE!");
// })();

// (() => {
//     console.log("run right away");
// })();

/*******************RECURSIVE FUNCTIONS*************** */
// function getRecursive(nr) {
//     console.log(nr);
//     if(nr > 0){
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }
// logRecursive(3);

/*******************NESTED FUNCTIONS*************** */
// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

/*******************ANONYMOUS FUNCTIONS*************** */
// let functionVariable = function () {
//     console.log("Not so secret though.");
// };

//functionVariable();

/*****************FUNCTION CALLBACKS***************** */
// function doFlexibleStuff(executeStuff) {
//     executeStuff();//functionVariable();
//     console.log("Inside doFlexibleStuff Function.");
// }

// doFlexibleStuff(functionVariable);

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);
/*******************LET VS VAR*************** */

