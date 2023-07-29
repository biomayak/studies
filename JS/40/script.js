"use strict";

// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     }
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log( JSON.stringify(descriptor, null, 2) );

// Object.defineProperty(user, "toString", {
//     enumerable: false
// });

// // Теперь наше свойство toString пропало из цикла:
// for (let key in user) console.log(key); // name

// let basket = {};
// Object.defineProperties(basket, {
//     volume: {value: 10, configurable: false, enumerable: false},
//     color: {value: 'brown', writable: false, enumerable: false},
//     apples: {value: {
//         color: 'green',
//         amount: 15
//     }, writable: true, configurable: true, enumerable: true}
// });
// console.log(Object.getOwnPropertyDescriptors(basket));

// let basketClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(basket));
// console.log(Object.getOwnPropertyDescriptors(basketClone));

// let obj = {
//     get propName() {
//         // геттер, срабатывает при чтении obj.propName
//     },
//     set propName(value) {
//         // сеттер, срабатывает при записи obj.propName = value
//     },
// }

///////////////////////

// let user = {
//     name: 'John',
//     surname: 'Smith',

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// };

// let user = {
//     name: 'John',
//     surname: 'Smith',
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
        
//     set(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// });

// user.fullName = 'Alice Cooper';
// console.log(user.fullName);

////////////////

// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             console.log('Слишком короткое имя');
//             return;
//         }
//         this._name = value;
//     },

// };

// user.name = 'Pete';
// console.log(user.name);

// user.name = 'Joe';
// console.log(user.name);

////////////////////

function User(name, birthday) {
    this.name = name,
    this.birthday = birthday,

    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User('John', new Date(1992, 6, 1));

console.log(john.age)