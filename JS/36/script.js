"use srtict";

let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); //3

let sayHi = new Function('console.log("Hello")');
sayHi(); //Hello

function getFunc() {
    let value = "test";
  
    let func = new Function('console.log(value)');
  
    return func;
}

getFunc()(); // ошибка: value не определено
        
        
function getFunc() {
    let value = "test";
    
    let func = function() { console.log(value); };
    
    return func;
}

getFunc()(); // "test", из лексического окружения функции getFunc