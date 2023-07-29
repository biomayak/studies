"use strict";

// let obj = {};
// console.log(obj.toString());

// console.log(obj.__proto__ === Object.prototype);

// let arr = [1, 2, 3];
// console.log( arr.__proto__ === Array.prototype);
// console.log( arr.__proto__.__proto__ === Object.prototype);
// console.log( arr.__proto__.__proto__.__proto__ );

// String.prototype.show = function() {
//     console.log(this);
// };

// "!!!".show();

// let pseudoArray = {
//     0: 'Hello',
//     1: 'world!',
//     length: 2,
// };

// pseudoArray.join = Array.prototype.join;

// console.log(pseudoArray.join(", "));

// task 1
// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     }
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// sum.defer(1000)(5, 7);
