"use strict"

// let animal = {
//   eats: true,
//   walk() {
//     return 'Animal walks...';
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// console.log(rabbit.eats);
// console.log(longEar.walk());

// rabbit.walk = function() {
//   return 'Rabbit! Bounce-bounce';
// };

// console.log(rabbit.walk());

// console.log(Object.keys(rabbit));

// for (let prop in rabbit) console.log(prop);

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
//   isOwn ? console.log(`Our: ${prop}`) : console.log(`Inherited: ${prop}`);
// }

// task 1

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)

// 1 - true
// 2 - null
// 3 - null // undefined ???????

// task 2

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 1,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   glasses: 2000,
//   __proto__: bed,
// };

// task 3

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// answer: rabbit gets full

// task 4

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };
// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// speedy.eat('apple')
// console.log(speedy.stomach);

// lazy.eat('bun')
// console.log(lazy.stomach);