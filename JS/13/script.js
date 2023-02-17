"use strict";
let user = { name: "Jade" };
let admin = user; //копирование адреса в памяти а не значения, в отличие от переменных

admin.age = 17;
alert(user.age);

let userTwin = {
    name: "Jade",
    age: 17,
}

alert(user === admin); //true
alert(user === userTwin); //false

let clone = {};
Object.assign(clone, user);

let permissions = {
    hall: true,
}

let merged = Object.assign({}, clone, permissions);

alert(merged)