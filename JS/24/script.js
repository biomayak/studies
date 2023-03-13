"use strict"
let range= {
    from: 1,
    to: 5,

};
range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
};

for (let num of range) {
    alert(num);
}

for (let char of "test") {
    alert(char);
}

let str = 'Hello';
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value);
}

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2
}

let arr = Array.from(arrayLike);
alert(arr.pop());

arr = Array.from(range);
alert(arr);

arr = Array.from(arr, num => num * num);
alert(arr);

str = '𝒳😂';
// разбивает строку на массив её элементов
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

