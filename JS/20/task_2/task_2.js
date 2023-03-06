"use strict";
function checkSpam(str) {
    str = str.toLowerCase();
    return (str.includes('xxx') || str.includes('viagra'))
}

let str = prompt('введите сообщение');
alert(checkSpam(str));