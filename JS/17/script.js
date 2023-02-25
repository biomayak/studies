"use strict";
let user = {};
alert( user?.address?.street ); //undefined (без ошибки)

let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert (id1 == id2); //false, тк каждый символ гарантированно уникален
alert(id); //TypeError: Cannot convert a Symbol value to a string
alert(id.toString()); // Symbol(id)
alert(id.description); //id

user['name'] = "John";
user[id] = 1;
alert(user[id]);
let admin = {
    name: "Вася",
    age: 13,
    [id]: 123,
};

// Свойства, чьи ключи – символы, не перебираются циклом for..in.

for (let key in user) alert(key);//name, age

let clone = Object.assign({}, admin);
alert(clone[id]); //123

id = Symbol.for("id"); //если символа не существует в глобальном реестре, то он будет создан
let idAgain = Symbol.for("id"); //чтение символа из глобального реестра
alert (id === idAgain); //true

alert(Symbol.keyFor(id));//name

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("Name");

alert(Symbol.keyFor(globalSymbol)); //name
alerrt(Symbol.keyFor(localSymbol)); //undefined

alert(local.Symbol(description)); //name

