"use strict";

function sayHello() {
  alert('Hello!');
}

sayHello ();

// Функции имеют доступ к внешним переменным

let a = 10;
function test_change_a () {
  a++;
}
alert(a);
test_change_a();
alert(a);

function showMessage(from, text = '...') { // аргументы
  alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет!

function calcSum (a = 0, b = 0) {
  return a+b;
}

let firstNum = +prompt('Введите число номер один', '');
let secondNum = +prompt('Введите число номер два', '');

alert(calcSum(firstNum, secondNum));

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

let userAge = +prompt('Введите ваш возраст:', '');
alert(checkAge(userAge));

function min(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
  return a;
}

function pow(x, n) {
  let result = x
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let powNumOne = +prompt('Введите число x, которое вы хотите возвести в степень n');
let powNumTwo = +prompt('Введите степень n, в которую вы хотите возвести число x');

alert (pow(powNumOne, powNumTwo));