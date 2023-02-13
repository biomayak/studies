"use strict";
let currentUser = null;
let defaultUser = "John";

let userName = currentUser || defaultUser || "unnamed";

alert(userName);

let x;

false || (x = 1);

alert(x); // 1
(x > 0) && alert('Greater than zero');

alert( 1 && 2 && null && 3 ); // null

let password
userName = undefined
userName = prompt('Введите имя пользователя: ')
if (userName === 'Админ') {
    password = prompt('Введите пароль: ')
    if (password === 'Я главный') {
        alert('Здравствуйте!')
    } else if (password) {
        alert('Неверный пароль')
    } else {
        alert('Отменено')
    }
} else if (userName) {
    alert ('Я вас не знаю, ' + userName)
} else {
    alert('Отменено')
}