"use strict";

/****************GLOBAL METHODS********** */
//ENCODING AND DECODING URIs
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//ENCODING AND DECODING URI COMPONENTS
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//PARSING NUMBERS (PARSEINT())
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, " is ", typeof int_int);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);
// console.log("Type of", str_nan, "is", typeof str_nan);

//PARSING NUMBERS (PARSEFLOAT())
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);


/****************ARRAY METHODS********** */
//FOREACH
// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {
// console.log("Printing stuff: ", element, " on array position: ", index);
// }
// arr.forEach(printStuff);

// arr.forEach((e, i) => {console.log("Printing stuff: ", e, " on array position: ", i)});


//FILTERING ARRAYS
// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));

//REPLACING ARRAY ELEMENTS
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log("Original array: " + arr);
// arr.copyWithin(0, 3);
// console.log("New array: " + arr);

//0: replacing grapefruit and 4 - coz we are copying 2 elements
//3: copying from index 3 - 5.6 is the value
//5: the last index we want to copy from + 1 

//MAPPING VALUES
// let arr = [1, 2, 3, 4];

// let mapped_arr = arr.map(x => x + 1);

// console.log(mapped_arr);

//LAST OCCURANCE
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));
// console.log(bb.lastIndexOf("hi"));

// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];
// const arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);

/****************STRING METHODS********** */
//COMBINING STRINGS
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(`String 1: ${s1}`);
// console.log(`String 2: ${s2}`);
// console.log(`Result: ${result}`);

//CONVERTING STRINGS TO ARRAYS
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

//CONVERTING ARRAYS TO STRINGS
// let letters = ["a", "b", "c"];
// let x = letters.join();//default separator is a comma
// console.log(x);
// x = letters.join('-');
// console.log(x);

//INDEXES
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// console.log(pos2);//returns an empty string

//SEARCH
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

//SUBSTRINGS
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,6);
// console.log("1:", substr1);
// console.log("2:", substr2);

//REPLACE
// let hi = "Hi buddy, how are you buddy";
// let new_hi = hi.replaceAll("buddy", "Pascal");
// console.log(hi);
// console.log(new_hi);

//CASING
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//START AND END OF A STRING
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_end = encouragement.endsWith("work!");
// console.log(bool_end);

/****************NUMBER METHODS********** */
// ISNAN()
// let x = 34;
// console.log(isNaN(x));//false
// console.log(!isNaN(x));//true

// let str = "hi";
// console.log(isNaN(str));//true

//ISFINITE()
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));//undefined

//ISINTEGER()
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//SPECIFYING DECIMAL PLACES
// let x = 1.23456;
// //toFixed rounds up (when next decimal is 5 - 9)
// let newX = x.toFixed(2);//2 decimal places
// console.log(newX);

// let newX2 = x.toPrecision(2);//2 numbers
// console.log(newX2);

/****************MATH METHODS********** */
//MAX AND MIN
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

//SQUARE ROOT
// let result = Math.sqrt(121);
// console.log(result);

// //pow(base, exponent)
// let result2 = Math.pow(5, 3);// 5 * 5 * 5
// //5 ** 3;
// console.log(result2);

// ROUND - rounds to nearest integer
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

//CEIL - removes decimals/ rounds up
// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

//FLOOR - rounds down
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

//TRUNC - removes decimal places (displays integer)
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));
// console.log("X:", negativeX, "becomes", Math.trunc(negativeX));
// console.log("Y:", negativeY, "becomes", Math.trunc(negativeY));

//EXPONENTS AND LOGARITHM
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

/****************DATE METHODS********** */
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

let d = new Date();
// console.log(d);
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

//PARSING
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

//8.7

let bDate = new Date(2004, 7, 11);
console.log(bDate);

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let day = bDate.getDate();
let month = bDate.getMonth();
let year = bDate.getFullYear();

let stringMonth = months[month];
console.log(`${day} ${stringMonth} ${year}`);

