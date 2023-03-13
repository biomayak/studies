"use srtict";
alert('Поиск простых чисел в заданном интервале');
let startNumber = +prompt('Введите нижний порог интервала:');
let stopNumber = +prompt('Введите верхний порог интервала:');

if (startNumber < 2) startNumber = 2;
outer: for (let i = startNumber; i < stopNumber; i++) {
  for (let j = 2; j < i; j++) {
      if (i % j === 0) continue outer;
  }
  alert(i);
}

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}

let browser = 'Safari';
if (browser === 'Edge') {
  alert ("You've got the Edge!");
} else if ( browser === 'Chrome') {
  alert('Okay we support these browsers too');
} else if ( browser === 'Safari') {
  alert('Okay we support these browsers too');
} else if ( browser === 'Firefox') {
  alert('Okay we support these browsers too');
} else if ( browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
  case 1:
    alert('Вы ввели число 1');
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
}