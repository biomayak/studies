"use strict";

function sayHi() {
    console.log("Hi");
}

console.log(sayHi.name); // sayHi

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
}

function sayHi() {
    console.log("Hi");
  
    // давайте посчитаем, сколько вызовов мы сделали
    sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi

console.log( `Вызвана ${sayHi.counter} раза` );

sayHi = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // использует func, чтобы снова вызвать себя же
    }
};

sayHi(); // Hello, Guest

// task 1
function makeCounter() {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;
    counter.set = function (value) {
        counter.count = value;
    }
    counter.decrease = function () {
        return counter.count--;
    }

    return counter;

}

//task 2
function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };

    return f;
}