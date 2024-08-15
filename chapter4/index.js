/****************IF...ELSE STATEMENTS************/
// let rain = false;
// if (rain) {
//     console.log("** Taking my umbrella when I need to go outside **");
// } else {
//     console.log("** I can leave my umbrella at home **");
// };

// let age = Number(prompt("How old are you?"));

// if(age < 18) {
//     alert("Sorry, but you can't get in under 18.");
// }else {
//     alert("Welcome!");
// };

/****************ELSE IF STATEMENTS************/
// let age = Number(prompt("How old are you?"));
// let cost = 0;
// let message;
// if (age < 3) {//age 0 to 2
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {//age 3 to 11
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars.";
// } else if (age >= 12 && age < 65) {//age 12 to 64
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {//age 65 and above
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// alert(`Because you are ${age}: ${message}`);
// console.log(message);
// console.log("Your Total cost: $" + cost);

/****************TERNARY OPERATORS************/
// let age = Number(prompt("How old are you?"));
// //condition ? if true : if false
// let access = age < 18 ? "Access denied" : "Welcome";
// alert(access);

/****************SWITCH STATEMENTS************/
let activity = "Drive back home";

//if statement
// if (activity === "Get up") {
//     console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//     console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//     console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//     console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//     console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//     console.log("It is 6:30PM");
// }

//switch statement
// switch (activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("I cannot determine the current time");
//         break;
// }

let grade = "E";

switch (grade) {
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know this grade.");
        break;
}