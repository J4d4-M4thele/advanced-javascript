"use strict";

/***********************REGEX**************** */
//SPECIFYING MULTIPLE OPTIONS FOR WORDS
// let text = "I love React and JavaScript!";
//TEST QUESTION
//g modifier finds all matches
//i modifier makes the expression case-insensitive
// console.log(text.match(/javascript|nodejs|react/gi));

//CHARACTER OPTIONS
// let text = "d";
// console.log(text.match(/[a-d]/));

// let text2 = "T";
// console.log(text2.match(/[a-zA-Z]/));//lowercase and uppercase letter matches

// let text3 = "äé!";
// console.log(text3.match(/[a-zA-Z0-9]/));

// let text4 = "Just some text.";
// console.log(text4.match(/./g));//anything can match
// console.log(text4.match(/\./g));//fullstop

// let text5 = "I'm 29 years old.";
// console.log(text5.match(/\d/g));//any digits

// let text6 = "Coding is a lot of fun!";
// console.log(text6.match(/\s/g));//whitespace

// let text7 = "In the end or at the beginning?";
// console.log(text7.match(/\bin/gi));//match text at beginning of string

// let nr = 357;
// //can't use .match() on numbers
// console.log(nr.match(/3/g));//throws error

//GROUPS
// let text = "I love JavaScript!";
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// let text2 = "I love JavaScript!";
// console.log(text2.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// let text3 = "You are doing great!";
// //either 'ng' or 'g'
// console.log(text3.match(/n?g/gi));//n is optional (indicated by ?)

// let text4 = "123123123";
// let text5 = "123123123a";
// //+ allows for repetition
// console.log(text4.match(/(123)+/));
// //*a finds any mathes where a precedes 123
// console.log(text5.match(/(123)*a/));

// let text6 = "abcabcabc";
// //repetition can be specified {min, max}
// console.log(text6.match(/(abc){1,2}/));

// let text7 = "I love JavaScript!";
// //<group name> specifies groups
// console.log(text7.match(/(?<language>javascript)/i));

//REPLACING AND SEARCHING STRINGS
// let text = "That's not the case.";
// //returns index of the word we're searching for
// console.log(text.search(/Case/i));

// let text2 = "Coding is fun. Coding opens up a lot of opportunities.";
// //arg1: word in the string
// //arg2: replacement
// console.log(text2);
// console.log(text2.replace(/Coding/g, "JavaScript"));

//EMAIL VALIDATION
// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(`Valid Email Address: ${validEmail.match(emailPattern)}`);
// console.log(`Invalid Email Address: ${invalidEmail.match(emailPattern)}`);

/*******************FUNCTIONS AND ARGUMENTS OBJECT******************** */
// function test(a, b, c) {
//     //first call the parameters value
//     //then calling the element of the arguments array
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// function test(a, b, c) {
//     //a now has a value
//     a = "nice";
//     //argument[1] has a value as well
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     //we can specify c when we call the function
//     console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

/*******************JAVASCRIPT HOISTING******************** */
// let x;
// x = 5;
// console.log(x);

// x = 5;
// console.log(x);
// var x;
// let x;
/*******************STRICT MODE******************** */
// function sayHi() {
//     let greeting = "Hello!";
//     console.log(greeting);
// }
// sayHi();

//ERROR HANDLING
// try {
//     trySomething();
// } catch (e) {
//     console.log("Oh oh");
// } finally {
//     console.log("Error or no error, I will be logged!");
// }

// function trySomething() {
//     alert("Everything works now!");
// }

/*******************USING COOKIES******************** */
// document.cookie = "name=Jada;favouriteColor=aqua";

// let cookie = decodeURIComponent(document.cookie);
// let cookieList = cookie.split(";");//creates an array
// for (let i = 0; i < cookieList.length; i++) {
//     let c = cookieList[i];
//     if (c.charAt(0) == " ") {
//         c = c.trim();
//     }
//     if (c.startsWith("name")) {
//         alert(c.substring(5, c.length));
//     }
// }

// function setCookie(e) {
//     document.cookie = "name=" + e.value + ";";
// }
// function sayHi(key) {
//     let name = getCookie(key);
//     document.getElementById("hi").innerHTML = "Hi " + name;
// }
// function getCookie(key) {
//     let cookie = decodeURIComponent(document.cookie);
//     let cookieList = cookie.split(";");
//     for (let i = 0; i < cookieList.length; i++) {
//         let c = cookieList[i];
//         if (c.charAt(0) == " ") {
//             c = c.trim();
//         }
//         if (c.startsWith(key)) {
//             console.log("hi " + c);
//             return c.substring(key.length + 1, c.length);
//         }
//     }
// }

/*******************LOCAL STORAGE******************** */
// let message = "Hello storage!";
// localStorage.setItem("example", message);
// if (localStorage.getItem("example")) {
//     document.getElementById("stored").innerHTML = localStorage.getItem("example");
// }

// console.log(window.localStorage.key(0));

// console.log(window.localStorage.getItem(window.localStorage.key(0)));//returns key's value

// console.log(window.localStorage.removeItem("example"));

// window.localStorage.clear();

/*******************JSON******************** */
// let object = {
//     "companies": [
//         {
//             "name": "JavaScript Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Main street",
//                     "zipcode": 12345,
//                     "city": "Scott"
//                 },
//                 {
//                     "street": "123 Side street",
//                     "zipcode": 35401,
//                     "city": "Tuscaloosa"
//                 }
//             ]
//         },
//         {
//             "name": "Python Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Party street",
//                     "zipcode": 68863,
//                     "city": "Nebraska"
//                 },
//                 {
//                     "street": "123 Monty street",
//                     "zipcode": 33306,
//                     "city": "Florida"
//                 }
//             ]
//         }
//     ]
// }

//PARSING
// let str = "{\"name\": \"Jada\", \"age\": 20}";
// let obj = JSON.parse(str);
// /*
// {
//     "name": "Jada",
//     "age": 20
// }
// */
// console.log(obj.name, " is ", obj.age, " years old.");

let dog = {
    "name": "wiesje",
    "breed": "dachshund"
};
let strdog = JSON.stringify(dog);
console.log(typeof strdog);
console.log(strdog);