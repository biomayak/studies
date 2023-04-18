"use sctrict";

// function sayHi(phrase='Hi', who='John') {
//     console.log( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

// // let timerId = setTimeout(() => console.log('Привет'), 1000);
// // clearTimeout(timerId);

// // let timerId = setInterval(sayHi, 1000);
// // setTimeout(() => { clearInterval(timerId2); console.log('stop'); }, 5000);

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
// }, 2000);

// setTimeout(() => console.log("Мир"));

// console.log("Привет");

//task 1
// function printNumbers(from, to){
//     let current = from;
//     let timerId = setInterval(() => {
//         console.log(current);
//         current++;
//         if (current == to) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// }

// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setTimeout(function tick() {
//         if (current == to) {
//             clearTimeout(timerId)
//         } else {
//             console.log(current++);
//             timerId = setTimeout(tick, 1000);
//         }
//     }, 1000)
// }

// printNumbers(1, 6)