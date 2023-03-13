"use strict";
let userName = prompt('Как тебя зовут?');
alert(`Привет, ${userName}`);
let apples = confirm('Любишь яблоки, ' + userName + '?');

let value = true;
alert(typeof value); // boolean
value = String(value);
alert(typeof value); // string

let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // присваивание возвращает значение
alert(a); // 3
alert(c); // 0

let n = 2;
n += 5;
n *= 2;
alert(n); // 14
alert(n++); // 14, после алерта становится 15
alert(--n); // становаится 14 до алерта

a = prompt("Первое число?", 1);
b = prompt("Второе число?", 2);

alert(a, ' + ', b, ' = ', ((+a) + (+b)));