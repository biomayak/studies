"use strict";

// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal);

// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal);

// Object.setPrototypeOf(rabbit, {});
// console.log(rabbit.eats);

//////////////////////////////////////////

// let animal = {
//     eats: true,
// }

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//         configurable: true,
//     }
// });

// console.log(rabbit.jumps);

// let rabbitClone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));
// console.log(rabbitClone.jumps);
// console.log(rabbitClone.eats);

//////////////////////////////////////////

// let obj = Object.create(null);

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// alert(obj[key]); // "some value"



// task 1
// let dictionary = Object.create(null, {
//     toString: {
//       value() {
//         return Object.keys(this).join();
//       }
//     }
// });



// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// for(let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// console.log(dictionary.toString);