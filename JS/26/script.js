"use strict";
// let weakMap = new WeakMap();
// let obj = {};

// weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

// // нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект

// let john = { name: "John" };

// weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null; // перезаписываем ссылку на объект
// // объект john удалён из памяти!

// alert(weakMap.size()); //0