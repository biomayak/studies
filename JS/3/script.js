"use strict";

let result = 5 > 4; // результат сравнения присваивается переменной result
alert(result); // true

let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a == b); // true

alert( 0 === false ); // false, так как сравниваются разные типы

alert( null === undefined ); // false
alert( null == undefined ); // true

let answer = prompt('сколько будет 2+2?', '');

if (answer == 4) {
    alert('Вы правы!');
} else if (answer < 4) {
    alert('Маловато, неправильно!');
} else if (answer > 4) {
    alert('Многовато, неправильно!');
};

let age = prompt('Сколько вам лет?', '');
let accessAllowed = (age > 18) ? true : false; // тернарный if
accessAllowed = (age > 18) // сравнение возвращает bool

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!'; // многострочный (многоусловный) тернарный if

alert(message);

let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.'); // замена if