"use strict";

let sayHi = function() {
  alert( "Привет" );
}; // объявление функции через Function Expression

let func = sayHi; // копирование функции

// function ask (question, yes, no) {
//   if (confirm(question)) yes();
//   else no(); 
// }
// function showOk() {
//   alert ('Вы согласились.');
// }
// function showCancel() {
//   alert ('Вы отменили выполнение.');
// }
// ask('Вы согласны?', showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


let sum = (a, b) => a + b;
/* Стрелочные функции,
более короткая форма для:
let sum = function(a, b) {
  return a + b;
};
*/

let product = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a * b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};

alert( product(1, 2) ); // 2

let arrowAsk = (question, yes, no) => confirm(question)? yes(): no();

arrowAsk(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
)