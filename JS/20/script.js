"use strict";

alert(`My\n`.length); //3
let str = `Hello`;
alert(str[0]);//H
alert(str.charAt(0));//H
alert(str[str.length - 1]);//o

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (пустая строка)

for (let char of "Hello") {
    alert(char);
}

str[0] = 'h'; // ошибка

alert('Interface'.toUpperCase()); //INTERFACE
alert('Interface'.toLowerCase()); //interface

str = 'Widget with id';

alert(str.indexOf('Widget')); //0
alert(str.indexOf('widget')); //-1, тк совпадений не найдено

alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
alert( str.indexOf("id", 2) ); // 12

alert(str.includes('Widget')); //true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

str = "stringify";
alert(str.slice(0, 5));
alert(str.slice(-4, -1)); // gif

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

alert( 'a' > 'Z' ); // true, строчные буквы больше заглавных

// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

alert( String.fromCodePoint(90) ); // Z

alert( 'Österreich'.localeCompare('Zealand') ); // -1
