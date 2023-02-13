"use strict";
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0 (оператор ?? проверяет значение height, и если оно не является null или undefined, возвращает значение 100 в данном случае)

let i = 0;
while (i < 3) { // 0, 1, 2
  alert( i );
  i++;
}

i = 0;
do { // 0, 1, 2, 3
  alert( i );
  i++;
} while (i < 3);

i = 0;
for (; i < 3; i++) { // выведет 0, затем 1, затем 2; sss как в питоне
    alert(i);
}

while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break;
    if (value === 0) continue;
    sum += value;
}
alert( 'Сумма: ' + sum );

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // если пустая строка или Отмена, то выйти из обоих циклов
      if (!input) break outer; //
  
      // сделать что-нибудь со значениями...
    }
}
alert('Готово!');

for (let i = 2; i <= 10; i + 2) {
    alert(i)
}

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// Данный цикл переписан ниже в форме while

i = 0
while(i<3) {
    alert(`number ${i}!`);
    i++;
}

i = 0
while(i <= 100) {
    i = +prompt('Введите число, большее 100:');
    if (!i) break;
}

