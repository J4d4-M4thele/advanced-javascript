"use strict";

//**********MOVING DOWN DOM TREE***************/
// console.dir(document.body);
// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// console.dir(document.body.children.forest.children.tree2.parentElement);//MOVING UP
// console.dir(document.body.children.forest.children.tree2);//MOVING SIDEWAYS
// console.dir(document.body.children.forest.children.tree2.previousElementSibling);
// console.dir(document.body.children.forest.children.tree1.nextElementSibling);

/***************SELECTING ELEMENTS AS OBJECTS************/
// console.dir(document.body.children.greeting);

// //CHANGING INNER TEXT
// document.body.children.greeting.innerText = "Bye!";
// //CHANGING INNER HTML
// document.body.children.greeting.innerHTML = "<b>Bye!</b>";

/***************ACCESSING ELEMENTS************/
// //BY ID
// let item1 = document.getElementById("two");
// item1.innerHTML = "<i>Hey!</i>"
// console.log(item1);

// //BY TAG NAME
// let tags = document.getElementsByTagName("div");
// console.log(tags); 
// let tag3 = document.getElementsByTagName("div").item(2);
// console.log(tag3);

// let head = document.getElementsByTagName("h1");
// console.log(head); 
// let heading = document.getElementsByTagName("h1");
// console.log(heading);

// //BY CLASS
// let ex = document.getElementsByClassName("example");
// console.log(ex);

// //BY CSS SELECTOR
// let p = document.querySelectorAll("p");
// console.log(p);

// //QUERYSELECTOR() AND QUERYSELECTORALL()
// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let sth = document.querySelector(".something");
// console.log(sth);

// let allDivs = document.querySelectorAll("div");
// console.log(allDivs);

//EVENT CLICK HANDLER
// function stop() {
//     alert('Ouch! Stop it!');
// }

// document.getElementById("one").onclick = function () {
//     alert("Ouch! Stop!");
// }

/***************THIS AND THE DOM************/
// function reveal(el) {
//     console.log(el.parentElement);
// }

/***************MANIPULATING ELEMENT STYLE************/
// function toggleDisplay() {
//     let p = document.getElementById("magic");
//     if (p.style.display === "none") {
//         p.style.display = "block";
//     } else {
//         p.style.display = "none";
//     }
// }

// function rainbowify() {
//     let divs = document.getElementsByTagName("div");
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].style.backgroundColor = divs[i].id;
//     }
// }

/***************CHANGING ELEMENT CLASSES************/
//ADDING
// function disappear() {
//     document.getElementById("shape").classList.add("hide");
// }
//REMOVING
// function change() {
//     document.getElementById("shape").classList.remove("blue");
// }

//TOGGLING
// function changeVisibility() {
//     document.getElementById("shape").classList.toggle("hide");
// }

/***************MANIPULATING ATTRIBUTES************/
// function changeAttr() {
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "background-color:red;border:1px solid black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");
// }

/***************EVENTS************/
// window.onload = function () {
//     document.getElementById("square").addEventListener("click", changeColor);
// }
// function changeColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

/***************CREATING ELEMENTS************/
// function addRandomNumber() {
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100);//NUMBER BETWEEN 0  AND 100
//     document.body.appendChild(el);
// }