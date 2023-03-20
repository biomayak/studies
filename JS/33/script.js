"use strict";
// ТЕМА: лексическое окружение (пространство имён)
// task 4
// function sum(a) {
//     return function (b){
//         return a + b;
//     };
// }

// console.log(sum(5)(-1));

// task 5
// function inBetween(a, b) {
//     return (currentValue) => {
//         a <= currentValue && currentValue <= b;
//     };
// }

// function inArray(arr) {
//     return (currentValue) => {
//         return arr.includes(currentValue)
//     };
// }

// task 6
// function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
// }

// task 7
function makeArmy() {
    let shooters = [];

    let i = 0
    while (i < 10) {
        let j = i;
        let shooter = function() {
          console.log( j );
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();