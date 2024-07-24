"use strict";

/***************SPECIFYING EVENTS************* */
//USING JS
// document.getElementById("unique").onclick = function() { magic(); };

//USING EVENT LISTENERS
// document.getElementById("unique").addEventListener("click", magic);

// function magic() {
//     alert("Abra Cadabra!!!!!");
// }

/***************ONLOAD EVENT HANDLERS************* */
// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
// });

/***************MOUSE EVENT HANDLERS************* */
// function changeColor() {
//     document.getElementById("divvy").style.backgroundColor = "aqua";
// }

// window.onload = function donenow() {
//     console.log("hi");
//     document.getElementById("divvy").addEventListener("mousedown", function () { changeColor(this, "green"); });
//     document.getElementById("divvy").addEventListener("mouseup", function () { changeColor(this, "yellow"); });
//     document.getElementById("divvy").addEventListener("dblclick", function () { changeColor(this, "black"); });
//     document.getElementById("divvy").addEventListener("mouseout", function () { changeColor(this, "blue"); });
// }
// console.log("hi again");
// function changeColor(el, color) {
//     el.style.backgroundColor = color;
// }

/***************EVENT TARGET PROPERTY************* */
// function triggerSomething() {
//     console.dir(event.target);
// }

// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//     document.getElementById("welcome").innerHTML = m;
// }

/***************DOM EVENT FLOW************* */
// function bubble() {
//     console.log(this.innerText);
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener("click", bubble);
// }

/***************ONCHANGE AND ONBLUR************* */
// function logEvent() {
//     let p = event.target;
//     if (p.name == "firstname") {
//         message("First Name Changed to " + p.value);
//     } else {
//         message("Last Name Changed to " + p.value);
//     }
// }
// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//     document.getElementById("welcome").innerHTML = m;
// }

/***************KEY EVENT HANDLERS************ */
// function numCheck() {
//     message("Number: " + !isNaN(event.key));//checks if input is a number
//     return !isNaN(event.key);
// }
// function numCheck2() {
//     message("Not a number: " + isNaN(event.key));//checks if input is not a number
//     return isNaN(event.key);
// }
// function message(m) {
//     document.getElementById('wrapper').innerHTML = m;
// }

/***************DRAG AND DROP************ */
// let holderItem;
// function dStart() {
//     holderItem = event.target;
// }
// function nDrop() {
//     event.preventDefault();
// }
// function dDrop() {
//     event.preventDefault();
//     if (event.target.className == "box") {
//         event.target.appendChild(holderItem);
//     }
// }

/***************FORM SUBMISSION************ */
function valForm() {
    var p = event.target.children;
    if (p.firstName.value == "") {
        message("Need a first name!!");
        return false;
    }
    if (p.lastName.value == "") {
        message("Need a last name!!");
        return false;
    }
    if (p.age.value == "") {
        message("Need an age!!");
        return false;
    }
    return true;
}
function message(m) {
    document.getElementById("wrapper").innerHTML = m;
}

/***************FORM SUBMISSION************ */