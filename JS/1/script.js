"use strict";
alert('Я JavaScript!'); //Однострочный комментарий
/*
Многострочный
комментарий
*/
let userName = 'Джон',
    admin = userName;

alert(userName);
userName = `${userName} теперь John`;
alert(userName);

let test_bool = true;
let test_null = null;
alert(`Тип переменной test_null - не ${typeof(test_null)}`)