"use strict";
let billion = 1000000000;
billion = 1e9; //1 * 10^(9) == 1 billion;
let ms = 0.000001;
ms = 1e-6;

alert(0xff); //255 - шестнадцатиричная форма записи числа
alert(0xFF); //255

let a = 0b11111111; //255 - бинарная форма записи числа
let b = 0o377; //255 - восьмеричная форма записи числа

alert (a == b); //true

let num = 255;
alert(num.toString(16)); //ff
alert(num.toString(2)); //11111111
//1 < base < 37, default = 10

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

alert( Math.random() );

//task 1
a = +prompt('Введите первое число:');
a = +prompt('Введите второе число:');
alert(a + b);

//task 2
function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);

//task 3
function random(min, max) {
    return min + Math.random() * (max - min);
}
