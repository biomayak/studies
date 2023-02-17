//Objects
"use strict";
// let user = new Object(); //синтаксис "Конструктор объекта"
let user = {
    name: "John",
    age: 30,
    "likes birds": false,
}; //синтаксис "Литерал объекта"

// объект = словарь ?

alert(user.name)
alert(user.age)

user.isAdmin = true;
delete user.age;
user["likes birds"] = true;
let key = "likes birds";
delete user[key]

const lang = {
    name: "Russian",
};

lang.name = "English";

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
    [fruit + 'Computers']: 5,
};

alert(bag.appleComputers);

function makeUser(name, age) {
    return {
        name, //name: name
        age, //age: age
        for: 13,
        let: false,
        return: "Nothing",
    };
}

let newUser = makeUser("Jane", 22);
alert(newUser.name);

alert(newUser.noSuchProperty === undefined); //true
alert("let" in newUser); //true


for (let prop in newUser) {
    alert(`${prop}: ${newUser[prop]}`);
}

// Задание - написать функцию isEmpty
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}