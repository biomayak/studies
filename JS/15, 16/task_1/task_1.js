//Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert( a == b ); // true